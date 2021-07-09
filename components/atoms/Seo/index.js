import React from 'react'
import Head from 'next/head'

const DEFAULT = {
  title: 'Tempus - Trustless Secondary Markets on Yield',
  description: "Tempus is an Open-Source and Non-Custodial Protocol for Yield Trading, Yield Optimization, and Fixed Rate and Leveraged Yield Farming.",
  image: 'https://tempus.finance/share.png',
  author: 'Tempus',
  url: 'https://tempus.finance',
}

export default function Seo({
  title = DEFAULT.title,
  description = DEFAULT.description,
  image = DEFAULT.image,
  author = DEFAULT.author,
  url = DEFAULT.url,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="author"
        content={author}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />
      <meta
        property="og:image:width"
        content={1200}
      />
      <meta
        property="og:image:height"
        content={630}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:creator"
        content="@tempusfinance"
      />
    </Head>
  )
}
