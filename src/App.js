import { Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Nav from './components/Nav'
import ProductList from './components/ProductList';
import RewardsCard from './components/RewardsCard';
import NewStrainForm from './components/NewStrainForm';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rewards" element={<RewardsCard />} />
      <Route path="/new/strain" element={<NewStrainForm />}/>
      {/* <Route path="/admin" element={<Login />} /> */}
    </Routes>
    </>
  );
}

export default App;
