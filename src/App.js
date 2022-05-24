import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import User from './components/User/User';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<UserForm username={username} setUsername={setUsername} />} />
          <Route path="/:userId" element={<User />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;