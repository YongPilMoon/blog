import { useRef, useState } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'

new Promise()
export default function Write() {
  const idRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()
  // const [showLink, setShowLink] = useState(false)
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts/')
      .then((res) => res.json())
      .then(({ allPostsData }) => {
        setAllPosts(allPostsData)
      })
  }, [])

  const handleSumbit = (event) => {
    event.preventDefault()

    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Fetch Error')
        })
        .then((data) => {
          // setShowLink(true)
          alert(data.message)
        })
        .catch((error) => alert(`request error: ${error}`))
    }
  }

  return (
    <>
      <Head>
        <title>Write post</title>
      </Head>
      <h1>Write a post</h1>
      <form onSubmit={handleSumbit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <div>
          {allPosts.map(({ title, id }) => {
            return <div key={id}>{title}</div>
          })}
        </div>
        <br />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <input
          className="rounded bg-pink-500 px-2"
          type="submit"
          value="Create"
        />
      </form>
    </>
  )
}
