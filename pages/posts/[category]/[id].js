import { getAllPostIds, getPostData } from '../../../lib/posts'
import Date from '@/features/ui/Date'

import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'

import Button from '@/features/ui/Button'
import Image from '@/features/ui/Image'
import Head from 'next/head'
import { siteTitle } from '../../_document'
import  CodeBlock from '@/features/ui/CodeBlock';

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, params.category)
  return {
    props: {
      postData,
    },
  }
}

const components = { Button, CodeBlock, Image }
export default function Post({ postData }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{`${postData.title} - ${siteTitle}`}</title>
      </Head>
      <article className="flex flex-col gap-8">
        <div>
          <h1>{postData.title}</h1>
          <div>
            <Date dateString={postData.date} />
          </div>
        </div>
        <div>
          {postData.mdxSource && (
            <MDXRemote {...postData.mdxSource} components={components} />
          )}
        </div>
      </article>
    </>
  )
}
