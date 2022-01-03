interface GitHubRepo {
  id: string
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

interface Project {
  repo: GitHubRepo
  npmPackage: NpmPackage
}

export type { GitHubRepo, NpmPackage, Project }
