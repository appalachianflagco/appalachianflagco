import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, url, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaUrl = url || data.site.siteMetadata.url
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={metaTitle}
            titleTemplate={`%s | The Appalachian Flag Co.`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:image`,
                content: image || '/flag.png',
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
                property: `fb:app_id`,
                content: `654686484698867`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  url: 'http://appalachianflagco.com',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        keywords
        url
      }
    }
  }
`
