import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO({ description, lang, meta, keywords, title }) {
  const metaDescription = description || 'default description'

  const LocalBussinesSchemaOrg = {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Poznań',
      postalCode: '61-122',
      streetAddress: 'Ostrówek 10',
    },
    name: 'ROBSON Bramy Garażowe',
    openingHours: ['Mo-Fr 8:00-16:00'],
    telephone: '+48 602 338 508',
    url: 'https://robson.com.pl',
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: 'author name',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate='%s | ROBSON bramy Poznań'>
      <script type='application/ld+json'>
        {JSON.stringify(LocalBussinesSchemaOrg)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'pl-PL',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default SEO
