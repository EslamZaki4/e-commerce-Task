import { Routes, Route} from 'react-router-dom';
import Wishlist from './pages/Wishlist';
import MainLayout from './components/templates/MainLayout';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    
        <>
         <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
          </MainLayout>
        </>
     
  );
};

export default App;
