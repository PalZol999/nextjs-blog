import * as fs from 'fs'
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetaData';


const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8")
  const matterResult= matter(content)
  return matterResult
  }

  export const generateStatisParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => {
        slug: post.slug
    })
  }

const PostPage = (props: any) => {
    const slug= props.params.slug
    const post= getPostContent(slug)
    return (
        <div>
        <div className="my-12 text-center">
          <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
          <p className="text-slate-400 mt-2">{post.data.date}</p>
        </div>
  
        <article className="prose md:prose-lg lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    )
}

export default PostPage