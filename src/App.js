import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Signin from './components/Signin';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Layout from './components/Layout';
import AuthState from './contexts/AuthContext';
import Me from './components/Me';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <AuthState>
      <Container>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/me' element={<Me />} />
            </Route>

          </Route>
        </Routes>
      </Container>
    </AuthState>
  );
}

export default App;
