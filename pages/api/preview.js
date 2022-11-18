export default function handler(req, res) {
  if (req.query.token !== "nick" || !req.query.post) {
    return res.status(401).json({ message: "invalid Token" });
  }

  res.setPreviewData({});

  res.redirect(`/posts/${req.query.post}`);
}
