import ViewContact from 'views/contact'
import { NextSeo } from 'next-seo';

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Kontakt"
      />
      <ViewContact />
    </>
  );
};

export default Contact;
