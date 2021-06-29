import ViewPost from 'views/post';
import { getPost } from 'utils/api/posts';
import { NextSeo } from 'next-seo';

const Post = ({ post }) => {
  return (
    <>
      <NextSeo
        title={post.title}
      />
      <ViewPost post={post} />
    </>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  const post = await getPost(slug);
  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post: post
    }
  };
}

export default Post;
