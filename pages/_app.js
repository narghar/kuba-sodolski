import { DefaultSeo } from 'next-seo';
import { getAllPosts } from 'utils/api/posts';
import { PageContextProvider } from 'context/page';
import SEO from 'next-seo.config';
import 'styles/index.css'


const MyApp = ({ Component, pageProps, allPosts }) => {
  return (
    <PageContextProvider allPosts={allPosts}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </PageContextProvider>
  );
};

MyApp.getInitialProps = async function ({ Component, ctx }) {
  const allPosts = await getAllPosts();
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps, allPosts };
}

export default MyApp
