import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='manifest' href='/manifest.json' />
        <link
          href='/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#0066F9' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        ></link>
      </Head>

      <Navbar />

      <div className='mt-10'></div>
      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'News API - CNN News',
  description: 'Get the latest CNN News',
  keywords: 'Trending News',
}
