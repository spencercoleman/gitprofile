import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/http";
import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import User from './components/User/User';
import Loader from "./components/Loader/Loader";
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [isLoading, fetchedData] = useFetch('https://api.github.com/rate_limit');

  let content = <Loader />;

  if (!isLoading && fetchedData) {
    const rateRemaining = fetchedData.rate.remaining;
    const rateLimit = fetchedData.rate.limit;

    if (rateRemaining > 0) {
      content = (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<UserForm username={username} setUsername={setUsername} />} />
            <Route path="/:userId" element={<User rateRemaining={rateRemaining} rateLimit={rateLimit}/>} />
          </Routes>
        </div>
      );
    }
    else {
      content = (
        <div>Oops! No more requests left. Try again later.</div>
      )
    }
  }
  else if (!isLoading && !fetchedData) {
    content = (
      <div>Something went wrong somewhere. Try again.</div>
    );
  }
  return content;
}

export default App;