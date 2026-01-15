import { useEffect, useState } from "react";
import { Link } from "@mui/material";

interface GitHubCommitAuthor {
  name: string;
  email: string;
  date: string;
}

interface GitHubCommitInfo {
  message: string;
  author: GitHubCommitAuthor;
}

interface GitHubCommit {
  sha: string;
  html_url: string;
  commit: GitHubCommitInfo;
}

interface LatestCommitProps {
  username: string;
  repo: string;
}

export function LatestCommit({ username, repo }: LatestCommitProps) {
  const [commit, setCommit] = useState<GitHubCommit | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestCommit() {
      const cacheKey = `latestCommit_${username}_${repo}`;
      const cached = localStorage.getItem(cacheKey);

      // use cache data if it's less than 1 hour old, helps reduce GitHub API calls
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < 3600000) {
          // 1 hour cache
          setCommit(data);
          setLoading(false);
          return;
        }
      }

      try {
        const res = await fetch(
          `https://api.github.com/repos/${username}/${repo}/commits`
        );

        // if cache data exists, use it on error
        if (!res.ok) {
          if (cached) {
            setCommit(JSON.parse(cached).data);
          }
          setLoading(false);
          setError(`Error: ${res.status} ${res.statusText}`);
          return;
        }

        const data = (await res.json()) as GitHubCommit[];
        if (data.length) {
          setCommit(data[0]);
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ data: data[0], timestamp: Date.now() })
          );
        }
      } catch (e) {
        console.error(e);

        if (cached) {
          setCommit(JSON.parse(cached).data);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchLatestCommit();
  }, [username, repo]);

  if (loading) return <div>Loading latest commit…</div>;
  if (error) return <div>{error}</div>;
  if (!commit) return null;

  const { message, author } = commit.commit;
  const date = new Date(author.date);

  return (
    <div>
      <Link href={commit.html_url} target="_blank" rel="noreferrer">
        {message}
      </Link>
      <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>
        {date.toLocaleString()}
      </div>
    </div>
  );
}
