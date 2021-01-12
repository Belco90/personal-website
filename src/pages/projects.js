import { SimpleGrid } from '@chakra-ui/react'
import FluidContainer from '~/components/FluidContainer'
import ProjectCard from '~/components/ProjectCard'
import MainLayout from '~/components/MainLayout'
import config from '~/config'
import { NextSeo } from 'next-seo'
import { subDays, format } from 'date-fns'

const PROJECTS = [
  {
    githubRepo: 'testing-library/eslint-plugin-testing-library',
    packageName: 'eslint-plugin-testing-library',
  },
  { githubRepo: 'Belco90/octoclairvoyant' },
  { githubRepo: 'Belco90/react-advanced-patterns-components' },
  { githubRepo: 'Belco90/mastodonte-js' },
]

const REVALIDATE_SECONDS = 60

const Projects = ({ projects }) => {
  return (
    <MainLayout>
      <NextSeo
        title="Projects"
        description={`${config.author.name}'s Projects`}
        openGraph={{ description: `${config.author.name}'s Projects` }}
      />
      <FluidContainer>
        <SimpleGrid minChildWidth="300px" spacing={6}>
          {projects.map(({ repo, npmPackage }) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.description}
              language={repo.language}
              url={repo.html_url}
              stars={repo.stargazers_count}
              downloads={npmPackage?.downloads}
            />
          ))}
        </SimpleGrid>
      </FluidContainer>
    </MainLayout>
  )
}

const isSuccessfulResponse = (response) =>
  response.status >= 200 && response.status < 300

const mapDataArrayToObjectCollection = (arr) => {
  const collection = {}

  arr
    .filter((item) => !!item)
    .forEach(({ url, data }) => {
      collection[url] = data
    })

  return collection
}

export async function getStaticProps() {
  const repos = await Promise.all(
    PROJECTS.map(async ({ githubRepo }) => {
      const [owner, repo] = githubRepo.split('/')

      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
          },
        }
      )

      if (isSuccessfulResponse(response)) {
        const repo = await response.json()
        return { url: githubRepo, data: repo }
      }
    })
  )

  const downloadsFromDate = format(subDays(new Date(), 7), 'y-MM-dd')
  const downloadsToDate = format(new Date(), 'y-MM-dd')
  const packages = await Promise.all(
    PROJECTS.filter((project) => !!project.packageName).map(async (project) => {
      const response = await fetch(
        `https://npm-stat.com/api/download-counts?package=${project.packageName}&from=${downloadsFromDate}&until=${downloadsToDate}`
      )

      if (isSuccessfulResponse(response)) {
        const packageDownloads = await response.json()
        const total = Object.values(
          packageDownloads[project.packageName]
        ).reduce((acc, currentValue) => acc + currentValue, 0)

        return { url: project.githubRepo, data: { downloads: total } }
      }
    })
  )

  const reposCollection = mapDataArrayToObjectCollection(repos)
  const packagesCollection = mapDataArrayToObjectCollection(packages)

  const projects = PROJECTS.map(({ githubRepo }) => {
    return {
      repo: reposCollection[githubRepo],
      npmPackage: packagesCollection[githubRepo] ?? null,
    }
  }).filter(({ repo }) => !!repo)

  return {
    props: {
      projects,
    },
    revalidate: REVALIDATE_SECONDS,
  }
}

export default Projects
