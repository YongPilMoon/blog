import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { siteTitle } from './_document'
import { getSortedPostList } from '../lib/posts'
import { PostList } from '@/features/post/PostList'

import { PrismaClient } from '@prisma/client'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const posts = await prisma.posts.findMany()
  console.log(posts)

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
