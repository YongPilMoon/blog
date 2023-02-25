import Darkmode from './Darkmode'
import Link from 'next/link'
import NoSSR from './NoSSR'
import Image from 'next/image'

const name = 'HELLO WORLD'
const menus = [
  {
    title: 'BLOG',
    category: 'blog',
  },
  {
    title: '알고리즘',
    category: 'algorithm',
  },
]
function Menu({ title, category }) {
  return (
    <Link
      href={`/?category=${category}`}
      className="text-lg font-bold dark:text-white text-black"
    >
      {title}
    </Link>
  )
}

function Header({ home }) {
  return (
    <>
      <div className="p-4 mb-6">
        <div className="flex items-center justify-between">
          <nav className="grid grid-flow-col gap-4">
            {menus.map(({ title, category }) => (
              <Menu key={title} title={title} category={category} />
            ))}
          </nav>
          <NoSSR>
            <Darkmode />
          </NoSSR>
        </div>
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
