import { readdirSync, readFileSync } from 'fs'

import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const getFileDataList = () => {
  let fileData = []
  const categories = readdirSync('posts', { withFileTypes: true }).map(
    (dir) => dir.name
  )

  for (const category of categories) {
    const files = readdirSync(`posts/${category}`)
    for (const file of files) {
      fileData.push({ category: category, id: file })
    }
  }

  return fileData
}

export function getSortedPostsData() {
  const fileData = getFileDataList('posts')

  const allPostsData = fileData.map(({ category, id }) => {
    const fileContents = readFileSync(`posts/${category}/${id}`, 'utf8')
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id: id.replace(/\.md$|\.mdx$/, ''),
      category,
      ...matterResult.data,
    }
  })

  // Sort posts by date
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

export function getAllPostIds() {
  const file = getFileDataList('posts')

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return file.map(({ category, id }) => {
    return {
      params: {
        category,
        id: id.replace(/\.md$|\.mdx$/, ''),
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
