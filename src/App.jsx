/* eslint-disable react/prop-types */
import Nav from './components/Nav';
import styles from './App.module.css';
import './App.font.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemListPage';
import AddItemPage from './pages/AddItemPage';

function App() {
  const location = useLocation();
  return (
    <>
      <Nav className={styles.nav} pathname={location.pathname} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='items' element={<ItemListPage />} />
        <Route path='additem' element={<AddItemPage />} />
      </Routes>
    </>
  );
}

export default App;
