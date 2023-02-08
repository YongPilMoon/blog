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
        <p>공부한 것을 정리하는 공간입니다.</p>
        <div>
          <ul>
            {allPostsData
              .filter(({ published }) => published)
              .map(({ id, date, title, description }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <div>{description}</div>
                  <small>
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
