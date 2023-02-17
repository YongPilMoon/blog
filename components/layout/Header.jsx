import Darkmode from './Darkmode'
import Link from 'next/link'
import NoSSR from './NoSSR'
import Image from 'next/image'

const name = 'YONGPIL BLOG'

function Header({ home }) {
  return (
    <>
      <div className="p-4 mb-6">
        <NoSSR>
          <Darkmode />
        </NoSSR>
      </div>
      <div className="flex flex-col items-center mb-6">
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
      </div>
    </>
  )
}

export default Header
