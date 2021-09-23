import NewsItem from '../components/NewsItem'
import Layout from '../components/Layout'
import LastestNewsItem from '../components/LastestNewsItem'

export default function HomePage({ articles }) {
  return (
    <Layout>
      <section className='w-11/12 mx-auto'>
        <LastestNewsItem article={articles[0]} />

        <div className='flex'>
          <h1 className='font-semibold text-3xl mt-5 text-purple-600'>
            Trending News
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-3 first:mt-0'>
          {articles ? (
            articles.map((article) => (
              <NewsItem key={article.url} article={article}></NewsItem>
            ))
          ) : (
            <h1>No Article Found</h1>
          )}
        </div>
      </section>
    </Layout>
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
