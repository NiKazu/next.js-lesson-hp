import Layout from "../components/Layout"
import { getAllPostsData } from "../lib/posts"
import Post from "../components/Post"

const Contact = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export default Contact

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  }
}