import { GetServerSideProps } from 'next'
import protectedPageRoute from '@/features/auth/protectedPageRoute'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return protectedPageRoute(ctx)
}

function WritePage() {
  return <div>Write Page</div>
}

export default WritePage
