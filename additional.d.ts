interface InsightsJs {
  init: (projectId: string) => void
  trackPages: () => void
}

declare const insights: InsightsJs
