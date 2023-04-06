import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

async function protectedPageRoute<T>(
  context: GetServerSidePropsContext,
  redirectTo?: string,
  getProps?: () => GetServerSidePropsResult<T>
) {
  const session = await getServerSession(context.req, context.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: redirectTo ?? '/api/auth/signin',
        permanent: false,
      },
    }
  }

  if (getProps) {
    return {
      props: getProps(),
    }
  }

  return {
    props: {
      data: null,
    },
  }
}

export default protectedPageRoute
