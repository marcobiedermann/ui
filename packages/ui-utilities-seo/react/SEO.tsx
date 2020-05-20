import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

interface Meta {
  content: string;
  name: string;
}

export interface SEOProps {
  author?: string;
  description: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

export const SEO: FC<SEOProps> = (props) => {
  const { author, description, lang = 'en', meta = [], title, ...otherProps } = props;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        ...[
          {
            name: 'description',
            content: description,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:description',
            content: description,
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
            content: author,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: description,
          },
        ],
        ...meta,
      ]}
      {...otherProps}
    />
  );
};

export default SEO;
