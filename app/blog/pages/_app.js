import Layout from '@/features/layout/Layout'
import '../styles/global.css'
import { useRouter } from 'next/router'
import ErrorBoundary from '@/features/ErrorBoundary'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <Layout home={router.pathname === '/' || router.pathname === '/algorithm'}>
      <ErrorBoundary>
        <Component {...pageProps} pathname={router.pathname} />
      </ErrorBoundary>
    </Layout>
  )
}
