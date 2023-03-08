import Link from 'next/link'
import Utterances from '../Utterances'
import Header from './Header'

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto pb-8">
      <Header home={home} />
      <main className="mb-6">{children}</main>
      {!home && (
        <>
          <Utterances />
          <div>
            <Link href="/">← Back to home</Link>
          </div>
        </>
      )}
    </div>
  )
}
