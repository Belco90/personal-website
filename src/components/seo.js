import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitter
            profilePicture
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const fullTitle = [title, site.siteMetadata.title]
    .filter(Boolean)
    .join(' | ');

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      li
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `Frontend Web Engineer`,
        },
        {
          property: `og:title`,
          content: fullTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@${site.siteMetadata.twitter}`,
        },
        {
          name: `twitter:title`,
          content: fullTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.profilePicture,
        },
      ].concat(meta)}
    />
  );
}

SEO.propTypes = propTypes;

SEO.defaultProps = defaultProps;

export default SEO;
