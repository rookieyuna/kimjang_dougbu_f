import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Footer from './pages/common/Footer';
import Header from './pages/common/Header';
import Register from './pages/register';
import Work from './pages/work';

function App() {
  
  return (
    <div className="App">
      <Header />
      <section className="containe h-80 mb-8 mt-24 ml-10 mr-10 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
