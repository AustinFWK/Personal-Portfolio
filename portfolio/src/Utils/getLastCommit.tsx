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
      try {
        const res = await fetch(
          `https://api.github.com/repos/${username}/${repo}/commits`
        );

        if (!res.ok) {
          setError(`Error: ${res.status} ${res.statusText}`);
          setLoading(false);
          return;
        }

        const data = (await res.json()) as GitHubCommit[];
        if (!data.length) {
          setError("No commits found.");
          setLoading(false);
          return;
        }

        setCommit(data[0]);
      } catch (e) {
        console.error(e);
        setError("Failed to load latest commit.");
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
