import Head from 'next/head';
import PropTypes from 'prop-types';
import config from '../config';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

function SEO({ description = config.description, title }) {
  const defaultTitle = config.title;
  return (
    <Head>
      <title>{`${title} | ${defaultTitle}`}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta name="keywords" content="JavaScript Engineer" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/profile-picture.jpg" />
    </Head>
  );
}

SEO.propTypes = propTypes;

export default SEO;
