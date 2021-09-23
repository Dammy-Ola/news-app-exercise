import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import moment from 'moment'
import styles from './NewsItem.module.css'

export default function NewsItem({ article }) {
  return (
    <div className={`${styles.newsItem}`}>
      <div className='pr-5'>
        <div className=''>
          <h3 className='inline'>{`${article.source.name} News`}</h3>
          <div className='ml-2 inline my-3'>
            <span className='text-purple-600 text-sm mb-10'>
              {`${moment(article.publishedAt).fromNow()}`}
            </span>
            <span class='material-icons text-yellow-400 text-sm ml-1'>
              local_fire_department
            </span>
          </div>
        </div>

        <Link href={`${slugify(article.title)}`}>
          <a className='text-xs font-medium'>{article.title}</a>
        </Link>
      </div>

      <div className='pl-5'>
        <div className='flex justify-between text-purple-600'>
          <div>
            <span class='material-icons text-lg'>favorite_border</span>
            <small className='ml-2'>235</small>
          </div>
          <span class='material-icons text-lg'>more_horiz</span>
        </div>

        <div className='my-3'>
          <Image
            src={article.urlToImage}
            alt='Picture of the author'
            width={200}
            height={200}
            className='rounded-md object-cover'
          />
        </div>
      </div>
    </div>
  )
}
