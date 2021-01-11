import { SimpleGrid } from '@chakra-ui/react'
import FluidContainer from '~/components/FluidContainer'
import ProjectCard from '~/components/ProjectCard'
import MainLayout from '~/components/MainLayout'
import config from '~/config'
import { NextSeo } from 'next-seo'

const GITHUB_REPOS = [
  'testing-library/eslint-plugin-testing-library',
  'Belco90/octoclairvoyant',
  'Belco90/react-advanced-patterns-components',
  'Belco90/mastodonte-js',
]

const REVALIDATE_SECONDS = 60

const Projects = ({ repositories }) => {
  return (
    <MainLayout>
      <NextSeo
        title="Projects"
        description={`${config.author.name}'s Projects`}
        openGraph={{ description: `${config.author.name}'s Projects` }}
      />
      <FluidContainer>
        <SimpleGrid minChildWidth="300px" spacing={10}>
          {repositories.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.description}
              language={repo.language}
              url={repo.html_url}
              stars={repo.stargazers_count}
            />
          ))}
        </SimpleGrid>
      </FluidContainer>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const responses = await Promise.all(
    GITHUB_REPOS.map((repoString) => {
      const [owner, repo] = repoString.split('/')
      return fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: { accept: 'application/vnd.github.v3+json' },
      })
    })
  )

  const repositories = await Promise.all(
    responses
      .filter((response) => response.status === 200)
      .map((response) => response.json())
  )

  return {
    props: {
      repositories,
    },
    revalidate: REVALIDATE_SECONDS,
  }
}

export default Projects
