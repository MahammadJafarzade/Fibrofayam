import Footer from './components/Layout/Footer/Footer';
import ScrollToTop from './components/ScrollToTop ';
import Routing from './Routing';
import { Link,BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <ScrollToTop>
  <Routing/>
  <Footer/>
  </ScrollToTop>
  </BrowserRouter>
  );
}

export default App;
