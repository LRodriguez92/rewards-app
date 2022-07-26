import { Routes, Route } from 'react-router-dom'
import UserForm from './components/UserForm'
import Nav from './components/Nav'
import ProductList from './components/ProductList';
import RewardsCard from './components/RewardsCard';
import StrainForm from './components/StrainForm';
import LoginRedirect from './components/LoginRedirect';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { logIn, logOut } from './redux/reducers/loggedInSlice'
import StampCard from './components/StampCard';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      console.log('Logged in!');
      dispatch(logIn())
    } else {
      console.log('Not logged in!');
      dispatch(logOut())
    }
  }, [dispatch])

  return (
    <>
    <div className=''>
      <Nav />
    </div>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/login" element={<UserForm loginForm={true}/>} />
      <Route path="/signup" element={<UserForm loginForm={false}/>} />
      <Route path="/rewards" element={<RewardsCard />} />
      <Route path="/new/strain" element={<StrainForm />}/>
      <Route path="/connect/:providerName/redirect" element={<LoginRedirect />} />
      <Route path="/users/:id/stamp/" element={<StampCard />}/>
      {/* <Route path="/admin" element={<Login />} /> */}
    </Routes>
    </>
  );
}

export default App;
