import Container from 'components/container'
import LayoutDefaultFooterPosts from './footer/posts';

const LayoutDefaultFooter = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 py-6">
      <Container>
        <div className="grid grid-cols-3">
          <div>Test 1</div>
          <LayoutDefaultFooterPosts />
          <div>Test 3</div>
        </div>
      </Container>
    </footer>
  )
};

export default LayoutDefaultFooter;
