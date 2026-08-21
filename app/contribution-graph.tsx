"use client";

import { useEffect, useState } from "react";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total: { lastYear: number };
  contributions: Contribution[];
};

export default function ContributionGraph() {
  const [data, setData] = useState<ContributionResponse | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/boredenough?y=last")
      .then((response) => {
        if (!response.ok) throw new Error("Contribution data unavailable");
        return response.json() as Promise<ContributionResponse>;
      })
      .then(setData)
      .catch(() => setFailed(true));
  }, []);

  const activeDays = data?.contributions.filter((day) => day.count > 0).length ?? 0;
  const longestStreak = data?.contributions.reduce(
    (result, day) => {
      const current = day.count > 0 ? result.current + 1 : 0;
      return { current, longest: Math.max(result.longest, current) };
    },
    { current: 0, longest: 0 },
  ).longest ?? 0;
  const weekCount = data ? Math.ceil(data.contributions.length / 7) : 53;
  const monthLabels = data?.contributions.flatMap((day, index) => {
    const date = new Date(`${day.date}T00:00:00`);
    if (date.getDate() > 7) return [];
    return [{ label: date.toLocaleDateString("en", { month: "short" }), week: Math.floor(index / 7) + 1 }];
  }).filter((month, index, months) => index === 0 || month.label !== months[index - 1].label) ?? [];

  return (
    <a className="contribution-panel" href="https://github.com/boredenough" target="_blank" rel="noreferrer">
      <div className="contribution-meta">
        <strong>{failed ? "View activity" : "Contribution calendar"}</strong>
        <span>{failed ? "GitHub ↗" : "Updated daily · GitHub ↗"}</span>
      </div>
      <div className="contribution-stats" aria-label="GitHub activity summary">
        <div><strong>{data?.total.lastYear ?? "—"}</strong><span>Contributions</span></div>
        <div><strong>{data ? activeDays : "—"}</strong><span>Active days</span></div>
        <div><strong>{data ? longestStreak : "—"}</strong><span>Longest streak</span></div>
      </div>
      <div className="contribution-scroll">
        <div className="contribution-calendar">
          <div className="month-labels" style={{ gridTemplateColumns: `repeat(${weekCount}, 1fr)` }} aria-hidden="true">
            {monthLabels.map((month) => <span key={`${month.label}-${month.week}`} style={{ gridColumn: month.week }}>{month.label}</span>)}
          </div>
          <div className="weekday-labels" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div>
          <div
            className={`contribution-grid${data ? "" : " contribution-loading"}`}
            role={data ? "img" : undefined}
            aria-label={data ? `${data.total.lastYear} GitHub contributions in the last 12 months` : undefined}
            aria-hidden={data ? undefined : true}
          >
            {(data?.contributions ?? Array.from({ length: 371 }, () => null)).map((day, index) => day ? (
              <i key={day.date} className={`contribution-cell level-${day.level}`} title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`} />
            ) : <i className="contribution-cell" key={index} />)}
          </div>
        </div>
      </div>
    </a>
  );
}
