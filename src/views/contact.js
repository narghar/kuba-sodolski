import Container from 'components/container';
import DefaultLayout from 'layouts/default';
import MainContact from './contact/mainContact';
const Contact = () => {
  return (
    <DefaultLayout>
      <Container>
        <MainContact />
      </Container>
    </DefaultLayout>
  )
}

export default Contact;
