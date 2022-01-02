interface GitHubRepo {
  name: string
  description: string
  language: string
  html_url: string
  stargazers_count: number
}

interface NpmPackage {
  url: string
  downloads: number
}

export type { GitHubRepo, NpmPackage }
