import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Page } from '../../components'
import { api, Post } from '../../utils'

const Post: NextPage<{ post: Post; contentHtml: string; slug: string }> = ({
  post,
  contentHtml,
}) => {
  return (
    <Page title='fuhqu' description=''>
      <div className='markdown-body' dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <div style={{ padding: '2rem 0', fontWeight: 600 }}>
        <a href={`https://gist.github.com/${post.id}`}>Leave a comment →</a>
      </div>
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await api.getSiteMap()
  const slugs = Object.keys(posts)

  return {
    paths: slugs.map(slug => {
      return { params: { slug } }
    }),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const { posts } = await api.getSiteMap()
  const post = posts[slug]
  const content = post.files['content.md'].content
  const contentHtml = await api.getHtml(content)

  return {
    props: {
      slug,
      post,
      contentHtml,
    },
  }
}

export default Post
