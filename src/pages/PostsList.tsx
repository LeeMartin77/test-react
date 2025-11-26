import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import type { Post, PostsResponse } from '../types'


// API Docs: https://dummyjson.com/docs/posts

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((data: PostsResponse) => {
        setPosts(data.posts || [])
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading posts…</div>
  if (error) return <div>Error loading posts: {error}</div>

  return (
    <div>
      <h2>Posts</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>ID</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Title</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Tags</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Reactions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: '8px 4px', verticalAlign: 'top' }}>{p.id}</td>
              <td style={{ padding: '8px 4px', verticalAlign: 'top' }}>
                <Link to={`/posts/${p.id}`}>{p.title}</Link>
                <div style={{ color: '#666', fontSize: 13 }}>{p.body.slice(0, 120)}{p.body.length>120? '…':''}</div>
              </td>
              <td style={{ padding: '8px 4px', verticalAlign: 'top' }}>{(p.tags || []).join(', ')}</td>
              <td style={{ padding: '8px 4px', verticalAlign: 'top' }}>{p.reactions ? p.reactions.likes + p.reactions.dislikes : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
