import Head from 'next/head'
import { siteTitle } from '../pages/_document'
import utilStyles from '../styles/utils.module.css'
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
      <section className={utilStyles.headingMd}></section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p className={utilStyles.description}>
          배운것을 정리하고 기록하는 블로그
        </p>
        <div className={utilStyles.listWrapper}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
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
