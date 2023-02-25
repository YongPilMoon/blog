import Head from 'next/head'
import { siteTitle } from '../pages/_document'
import Link from 'next/link'
import Date from '@/features/ui/Date'
import { getSortedPostList } from '../lib/posts'

export function getStaticProps() {
  const allPostsData = getSortedPostList()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          <ul className="grid gap-4">
            {allPostsData
              .filter(({ published }) => published)
              .map(({ id, category, date, title, description }) => (
                <div key={id}>
                  <Link
                    href={`posts/${category}/${id}`}
                    className="text-xl font-bold"
                  >
                    {title}
                  </Link>
                  <div>{description}</div>
                  <small className="text-sm text-gray-400">
                    <Date dateString={date} />
                  </small>
                </div>
              ))}
          </ul>
        </div>
      </section>
    </>
  )
}
