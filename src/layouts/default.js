import LayoutDefaultMeta from 'layouts/default/meta';
import LayoutDefaultHeader from 'layouts/default/header';
import LayoutDefaultFooter from 'layouts/default/footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <LayoutDefaultMeta />

      <div className="flex flex-col h-screen">
        <LayoutDefaultHeader />
        <main>{children}</main>
        <LayoutDefaultFooter />
      </div>
    </>
  )
};

export default DefaultLayout
