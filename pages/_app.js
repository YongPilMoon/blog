import Layout from '@/components/layout/Layout'
import '../styles/global.css'
import { useRouter } from 'next/router'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <Layout home={router.pathname === '/'}>
      <ErrorBoundary>
        <Component {...pageProps} pathname={router.pathname} />
      </ErrorBoundary>
    </Layout>
  )
}
