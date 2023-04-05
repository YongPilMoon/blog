import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { siteTitle } from './_document'
import { getSortedPostList } from '../lib/posts'
import { PostList } from '@/features/post/PostList'

export function getStaticProps() {
  const blogPostList = getSortedPostList('blog')
  return {
    props: {
      blogPostList,
    },
  }
}

export default function Home({
  blogPostList,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="grid gap-4">
          <PostList path="blog" postList={blogPostList} />
        </div>
      </section>
    </>
  )
}
