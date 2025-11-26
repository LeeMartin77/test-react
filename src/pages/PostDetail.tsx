import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import type { Post } from '../types'

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((data: Post) => setPost(data))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div>Loading post…</div>
  if (error) return <div>Error loading post: {error}</div>
  if (!post) return <div>Post not found</div>

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        <strong>Tags:</strong> {(post.tags || []).join(', ')}
      </p>
      <p>
        <strong>Reactions:</strong> {post.reactions as any ?? '-'}
      </p>
      <p>
        <Link to={`/posts/${post.id}`}>Back to List</Link>
      </p>
    </div>
  )
}
