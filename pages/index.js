import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import moment from 'moment'
import NewsItem from '../components/NewsItem'

export default function HomePage({ articles }) {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        ></link>
      </Head>
      <section className='w-11/12 mx-auto'>
        <div>
          {articles && (
            <div className='relative'>
              <Image
                src={articles[0].urlToImage}
                alt='Picture of the author'
                width={700}
                height={400}
                className='rounded-md object-cover '
              />

              <div className='absolute bottom-0 left-0 bg-gradient-to-t from-purple-900 rounded-md'>
                <div className='text-white mx-auto w-11/12 pb-5'>
                  <div className='flex justify-between'>
                    <div className='flex justify-start items-center'>
                      <h3>{`${articles[0].source.name} News`}</h3>
                      <div className='inline'>
                        <span className='ml-2 inline text-sm mb-10'>
                          {`${moment(articles[0].publishedAt).fromNow()}`}
                        </span>
                        <span className='material-icons text-yellow-400 text-sm ml-1'>
                          local_fire_department
                        </span>
                      </div>
                    </div>
                    <span className='material-icons text-lg'>more_horiz</span>
                  </div>

                  <Link href={`${slugify(articles[0].title)}`}>
                    <a className='text-xs font-medium'>{articles[0].title}</a>
                  </Link>

                  <div className='flex justify-end'>
                    <span className='material-icons text-xl'>
                      favorite_border
                    </span>
                    <small className='ml-2 mt-2'>235</small>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='flex'>
          <h1 className='font-semibold text-3xl mt-5 text-purple-600'>
            Trending News
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-3 first:mt-0'>
          {articles ? (
            articles.map((article) => (
              <NewsItem key={article.url} article={article}></NewsItem>
            ))
          ) : (
            <h1>No Article Found</h1>
          )}
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps() {
  const res =
    await fetch(`https://newsapi.org/v2/top-headlines?sources=cnn&language=en&apiKey=${process.env.NEWS_API_API_KEY}
  `)

  const { articles } = await res.json()

  if (!articles) {
    return {
      notFound: true,
    }
  }

  return {
    props: { articles }, // will be passed to the page component as props
  }
}
