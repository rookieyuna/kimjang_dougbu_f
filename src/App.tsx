import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import Footer from './pages/common/Footer';
import Header from './pages/common/Header';
import Sidebar from './pages/common/Sidebar';
import Work from './pages/work';
import Customer from './pages/customer';
import Stastistics from './pages/statistics';
import Register from './pages/register';

function App() {
  
  return (
    <div className="App">
      <Header />
      <section className="containe flex h-80 mb-8 mt-24 ml-10 mr-10 relative">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/statistics" element={<Stastistics />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
