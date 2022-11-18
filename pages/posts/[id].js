import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "@/components/Date";
import utilStyles from "../../styles/utils.module.css";
import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import CodeBlock from "@/components/CodeBlock";
import Button from "@/components/Button";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params, preview }) {
  console.log(`>>>>>>> ${preview}`);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const components = { Button, CodeBlock };
export default function Post({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      {postData.contentHtml && (
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      )}
      {postData.mdxSource && (
        <MDXRemote {...postData.mdxSource} components={components} />
      )}
    </article>
  );
}
