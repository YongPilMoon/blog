import { readdirSync, readFileSync } from 'fs'

import matter, { GrayMatterFile } from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

export type PostCategory = 'blog' | 'algorithm'

export type PostListItem = {
  id: string
  date: string
  title: string
  description: string
  published: boolean
}

interface FrontMatter {
  title: string
  date: string
}

export function getSortedPostList(postCategory: PostCategory) {
  const fileNames = readdirSync(`posts/${postCategory}`)

  const allPostsData = fileNames.map((fileName: string) => {
    const fileContents = readFileSync(
      `posts/${postCategory}/${fileName}`,
      'utf8'
    )
    const matterResult = matter(fileContents) as GrayMatterFile<string>

    return {
      id: fileName.replace(/\.md$|\.mdx$/, ''),
      ...matterResult.data,
    }
  }) as PostListItem[]

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

const getAllFile = () => {
  const categories = readdirSync(`posts/`)
  return categories.map((category) => ({
    fileNames: readdirSync(`posts/${category}`),
    category,
  }))
}

export function getAllPostIds() {
  const fileNames = getAllFile()
    .map(({ fileNames }) => fileNames)
    .flat()

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$|\.mdx$/, ''),
      },
    }
  })
}

export async function getPostData(id: string) {
  const files = getAllFile()

  let postCategory = ''
  files.forEach(({ fileNames, category }) => {
    if (fileNames.includes(`${id}.mdx`)) {
      postCategory = category
    }
  })

  const fullPath = `posts/${postCategory}/${id}.mdx`
  const fileContents = readFileSync(fullPath, 'utf8') // 파일 내용을 문자열로 반환
  const matterResult = matter(fileContents) // front-matter를 파싱
  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks],
    },
  }) // mdx파일을 javascript로 변환

  const frontmatter = matterResult.data as FrontMatter

  return {
    id,
    mdxSource,
    ...frontmatter,
  }
}
