import DefaultLayout from "layouts/default";
import Container from "components/container";
import Button from "components/button";

const Home = () => {
  return (
    <DefaultLayout>
      <Container>
        <div className="my-12">
          <span className="text-2xl">Buttons</span>

          <div className="mb-6">
            <Button color="red">Red button</Button>
          </div>
          <div>
            <Button color="green">Green button</Button>
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
