import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'
import Darkmode from './Darkmode'
import NoSSR from './NoSSR'
import Utterances from './Utterances'

const name = 'YONGPIL BLOG'

export default function Layout({ children, home }) {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <div className={styles.container}>
        <NoSSR>
          <Darkmode />
        </NoSSR>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
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
        <main>{children}</main>
        {!home && (
          <>
            <Utterances />
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
