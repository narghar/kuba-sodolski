import DefaultLayout from 'layouts/default';
import Container from 'components/container';
import PostDate from "components/postDate";
import Image from "next/image";
import parseHtml from "utils/parseHtml";

const Post = ({ post }) => {
  return (
    <DefaultLayout>
      <Container>
        <article>
          <h1 className="test post-blog">{post.title}</h1>
          <PostDate dateString={post.date} />
          <Image src={post.featuredImage?.node.sourceUrl} width={700} height={300} alt='image' />
          <div>{parseHtml(post.content)}</div>
          <footer>
            Footer
          </footer>
        </article>
      </Container>
    </DefaultLayout>
  )
}

export default Post;
