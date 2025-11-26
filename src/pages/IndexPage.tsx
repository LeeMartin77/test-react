import { Link } from 'react-router'

export default function IndexPage() {
  return (
    <div>
      <h2>Welcome</h2>
      <p>This is a small test app. Go to the posts list to view posts.</p>
      <p>
        <Link to="/posts">View posts</Link>
      </p>
    </div>
  )
}
