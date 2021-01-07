import { SimpleGrid } from '@chakra-ui/react'
import Container from '~/components/Container'
import ProjectCard from '~/components/ProjectCard'
import MainLayout from '~/components/MainLayout'
import SEO from '~/components/SEO'
import config from '~/config'
import octokit from '~/octokit'

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
      <SEO title="Projects" description={`${config.author.name}'s Projects`} />
      <Container>
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
      </Container>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const responses = await Promise.all(
    GITHUB_REPOS.map((repoString) => {
      const [owner, repo] = repoString.split('/')
      return octokit.repos.get({ owner, repo })
    })
  )

  const repositories = responses
    .map((response) => response?.data)
    .filter(Boolean)

  return {
    props: {
      repositories,
    },
    revalidate: REVALIDATE_SECONDS,
  }
}

export default Projects
