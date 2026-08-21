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

  return (
    <a className="contribution-panel" href="https://github.com/boredenough" target="_blank" rel="noreferrer">
      <div className="contribution-meta">
        <strong>{data ? `${data.total.lastYear} contributions` : failed ? "View activity" : "Loading activity"}</strong>
        <span>{failed ? "GitHub ↗" : "Updated daily · GitHub ↗"}</span>
      </div>
      <div className="contribution-scroll">
        {data ? (
          <div className="contribution-grid" role="img" aria-label={`${data.total.lastYear} GitHub contributions in the last 12 months`}>
            {data.contributions.map((day) => (
              <i
                key={day.date}
                className={`contribution-cell level-${day.level}`}
                title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
              />
            ))}
          </div>
        ) : (
          <div className="contribution-grid contribution-loading" aria-hidden="true">
            {Array.from({ length: 371 }, (_, index) => <i className="contribution-cell" key={index} />)}
          </div>
        )}
      </div>
    </a>
  );
}
