import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Signup from './components/SignUp';
import Login from './components/Login';

const App = () => {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path='/' exact element={<Home />} />}
      {user &&<Route path='/books/create' element={<CreateBook />} />}
      {user && <Route path='/books/details/:id' element={<ShowBook />} />}
      {user && <Route path='/books/edit/:id' element={<EditBook />} />}
      {user && <Route path='/books/delete/:id' element={<DeleteBook />} />}
      <Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/signup" />}/>
    </Routes>
  );
};

export default App;
