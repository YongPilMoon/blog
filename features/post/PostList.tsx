import React from 'react'
import { PostListItem, PostCategory } from '@/lib/posts'
import Link from 'next/link'
import Date from '@/features/ui/Date'

type PostListProps = {
  path: PostCategory
  postList: PostListItem[]
}

export function PostList({ path, postList }: PostListProps) {
  return (
    <>
      {postList
        .filter(({ published }) => published)
        .map(({ id, date, title, description }) => (
          <div key={id}>
            <Link href={`posts/${id}`} className="text-xl font-bold">
              {title}
            </Link>
            <div>{description}</div>
            <small className="text-sm text-gray-400">
              <Date dateString={date} />
            </small>
          </div>
        ))}
    </>
  )
}
