import Link from "next/link";
import { usePageContext } from "context/page";


const LayoutDefaultFooterPosts = () => {
  const { allPosts } = usePageContext();

  return (
    <div>
      <h2>Aktualności</h2>

      <div>
        {allPosts.map((post) => (
          <div key={post.node.slug}>
            <Link href={post.node.slug}>
              <a>{post.node.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutDefaultFooterPosts;
