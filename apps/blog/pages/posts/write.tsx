import { GetServerSideProps } from 'next'
import protectedPageRoute from '@/features/auth/protectedPageRoute'
import dynamic from 'next/dynamic'
const PostEditor = dynamic(() => import('../../features/post/PostEditor'), {
  ssr: false,
})

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return protectedPageRoute(ctx)
}

function WritePage() {
  return <PostEditor />
}

export default WritePage
