import { readdirSync, readFileSync } from 'fs'

import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

type PostPath = 'blog' | 'algorithm'

export function getSortedPostList(postPath: PostPath) {
  const fileNames = readdirSync(`posts/${postPath}`)

  const allPostsData = fileNames.map((fileName: string) => {
    const fileContents = readFileSync(`posts/${postPath}/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id: fileName.replace(/\.md$|\.mdx$/, ''),
      ...matterResult.data,
    }
  })

  // @ts-ignore
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds(postPath: PostPath) {
  const fileNames = readdirSync(`posts/${postPath}`)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$|\.mdx$/, ''),
      },
    }
  })
}

export async function getPostData(id, category) {
  const fullPath = `posts/${category}/${id}.mdx`
  const fileContents = readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const mdxSource = await serialize(matterResult.content)

  return {
    id,
    mdxSource,
    ...matterResult.data,
  }
}
