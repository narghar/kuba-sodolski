import Container from "components/container";
import DefaultLayout from "layouts/default";
import Posts from "./blog/posts";


const Blog = () => {
  return (
    <DefaultLayout>
      <Container>
        <Posts />
      </Container>
    </DefaultLayout>
  );
};




export default Blog;
