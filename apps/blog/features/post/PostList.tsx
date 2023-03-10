import { PostListItem, PostCategory } from '@/lib/posts'
import Link from 'next/link'
import Date from '@/features/ui/Date'
import { css } from '@emotion/react'
import { Text } from 'ui'

type PostListProps = {
  path: PostCategory
  postList: PostListItem[]
}

const titleStyle = css`
  color: rgb(37, 99, 235);
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
`

export function PostList({ postList }: PostListProps) {
  return (
    <>
      {postList
        .filter(({ published }) => published)
        .map(({ id, date, title, description }) => (
          <div key={id}>
            <Link href={`posts/${id}`}>
              <Text typography="subtitle1" customCSS={titleStyle}>
                {title}
              </Text>
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
