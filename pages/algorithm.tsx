import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import React from 'react'
import { siteTitle } from './_document'
import { getSortedPostList } from '../lib/posts'
import { PostList } from '@/features/post/PostList'

export function getStaticProps() {
  const algorithmPost = getSortedPostList('algorithm')
  return {
    props: {
      algorithmPost,
    },
  }
}

export default function Algorithm({
  algorithmPost,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="grid gap-4">
          <PostList path="blog" postList={algorithmPost} />
        </div>
      </section>
    </>
  )
}
