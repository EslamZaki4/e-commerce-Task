import { Routes, Route} from 'react-router-dom';
import Wishlist from './pages/Wishlist';
import MainLayout from './components/templates/MainLayout';
import HomePage from './pages/Home';

const App = () => {
  return (
    
        <>
         <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          </MainLayout>
        </>
     
  );
};

export default App;
