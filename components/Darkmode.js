import { useEffect, useState } from 'react'

function Darkmode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const onClick = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <button className="w-12 px-2" onClick={onClick}>
      {theme === 'dark' ? (
        <img src="/images/light-mode.svg" alt="light" />
      ) : (
        <img src="/images/dark-mode.svg" alt="dark" />
      )}
    </button>
  )
}

export default Darkmode
