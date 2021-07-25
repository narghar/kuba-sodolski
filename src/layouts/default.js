import LayoutDefaultFooter from 'layouts/default/footer';
import LayoutDefaultHeader from 'layouts/default/header';
import LayoutDefaultMeta from 'layouts/default/meta';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <LayoutDefaultMeta />
      <div className="flex flex-col max-w-8xl mx-auto h-screen">
        <LayoutDefaultHeader />
        <main>{children}</main>
        <LayoutDefaultFooter />
      </div>
    </>
  );
};

export default DefaultLayout
