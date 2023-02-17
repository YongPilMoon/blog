function Image({ src, width = 300, height = 300 }) {
  return <img src={src} style={{ width, height }} />
}

export default Image
