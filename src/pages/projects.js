import Seo from '../components/Seo';
import Container from '../components/Container';
import { SimpleGrid } from '@chakra-ui/core';
import ProjectCard from '../components/ProjectCard';

const PROJECTS = [
  {
    title: 'eslint-plugin-testing-library',
    description:
      'ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library',
    language: 'TypeScript',
    url: 'https://github.com/testing-library/eslint-plugin-testing-library',
    stars: 334,
  },
  {
    title: 'octoclairvoyant',
    description:
      '🔮 Filter and group GitHub repository releases to compare changes with ease ',
    language: 'TypeScript',
    url: 'https://github.com/Belco90/octoclairvoyant',
    stars: 24,
  },
  {
    title: 'mastodonte-js',
    description:
      '🐘 Un generador de palabras para los mastodontes, cracks y figuras como tú. ',
    language: 'TypeScript',
    url: 'https://github.com/Belco90/mastodonte-js',
    stars: 1,
  },
  {
    title: 'react-advanced-patterns-components',
    description: 'Iterating through component with advanced React patterns',
    language: 'JavaScript',
    url: 'https://github.com/Belco90/react-advanced-patterns-components',
    stars: 5,
  },
];

const Projects = () => {
  return (
    <>
      <Seo title="Projects" />
      <Container>
        <SimpleGrid minChildWidth="300px" spacing={10}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.url} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Projects;
