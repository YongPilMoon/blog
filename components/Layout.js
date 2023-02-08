import Image from 'next/image'
import Link from 'next/link'
import Darkmode from './Darkmode'
import NoSSR from './NoSSR'
import Utterances from './Utterances'

const name = 'YONGPIL BLOG'

export default function Layout({ children, home }) {
  return (
    <div>
      <div className="container mx-auto pb-8">
        <div className="p-4 mb-6">
          <NoSSR>
            <Darkmode />
          </NoSSR>
        </div>
        <header className="flex flex-col items-center mb-6">
          {home ? (
            <>
              <Image
                className="rounded-full mb-4"
                priority
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt=""
              />
              <h1>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  className="rounded-full mb-4"
                  priority
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2>
                <Link href="/">{name}</Link>
              </h2>
            </>
          )}
        </header>
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
    </div>
  )
}
