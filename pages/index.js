import Head from 'next/head'
import { siteTitle } from '../pages/_document'
import Link from 'next/link'
import Date from '../components/Date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

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
              .map(({ id, date, title, description }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`} className="text-xl font-bold">
                    {title}
                  </Link>
                  <div>{description}</div>
                  <small className="text-sm text-gray-400">
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  )
}
