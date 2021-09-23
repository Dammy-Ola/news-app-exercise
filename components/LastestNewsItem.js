import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'
import moment from 'moment'

export default function LastestNewsItem({ article }) {
  return (
    <div>
      {/* mobile */}
      <div className='md:hidden'>
        {article && (
          <div className='relative'>
            <Image
              src={article.urlToImage}
              alt='Picture of the author'
              width={700}
              height={400}
              className='rounded-md object-cover'
            />

            <div className='absolute bottom-0 left-0 bg-gradient-to-t from-purple-900 rounded-md w-full'>
              <div className='text-white mx-auto w-11/12 pb-5'>
                <div className='flex justify-between'>
                  <div className='flex justify-start items-center'>
                    <h3>{`${article.source.name} News`}</h3>
                    <div className='inline'>
                      <span className='ml-2 inline text-sm mb-10'>
                        {`${moment(article.publishedAt).fromNow()}`}
                      </span>
                      <span className='material-icons text-yellow-400 text-sm ml-1'>
                        local_fire_department
                      </span>
                    </div>
                  </div>
                  <span className='material-icons text-lg'>more_horiz</span>
                </div>

                {/* <Link href={`${slugify(article.title)}`}> */}
                <a
                  className='text-xs font-medium'
                  href={article.url}
                  target='_blank'
                >
                  {article.title}
                </a>
                {/* </Link> */}

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
      {/* Desktop */}
      <div className='hidden md:block'>
        {article && (
          <div className='relative'>
            <Image
              src={article.urlToImage}
              alt='Picture of the author'
              width={1500}
              height={700}
              className='rounded-md object-cover'
            />

            <div className='absolute bottom-0 left-0 bg-gradient-to-t from-purple-900 rounded-md w-full'>
              <div className='text-white mx-auto w-11/12 pb-16'>
                <div className='flex justify-between'>
                  <div className='flex justify-start items-center'>
                    <h3 className='text-4xl'>{`${article.source.name} News`}</h3>
                    <div className='inline'>
                      <span className='ml-2 inline'>
                        {`${moment(article.publishedAt).fromNow()}`}
                      </span>
                      <span className='material-icons text-yellow-400 text-sm ml-1'>
                        local_fire_department
                      </span>
                    </div>
                  </div>
                  <span className='material-icons text-lg'>more_horiz</span>
                </div>

                {/* <Link href={`${slugify(article.title)}`}> */}
                <a
                  className='text-2xl font-medium'
                  href={article.url}
                  target='_blank'
                >
                  {article.title}
                </a>
                {/* </Link> */}

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
    </div>
  )
}
