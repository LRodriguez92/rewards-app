import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Nav from './components/Nav'
import ProductList from './components/ProductList';
import RewardsCard from './components/RewardsCard';
import StrainForm from './components/StrainForm';
import LoginRedirect from './components/LoginRedirect';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rewards" element={<RewardsCard />} />
      <Route path="/new/strain" element={<StrainForm />}/>
      <Route exact path="/connect/:providerName/redirect" element={<LoginRedirect />} />
      {/* <Route path="/admin" element={<Login />} /> */}
    </Routes>
    </>
  );
}

export default App;
