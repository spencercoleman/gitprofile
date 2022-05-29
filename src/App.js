import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/http";
import { useThemeDetector } from "./hooks/theme";
import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import User from './components/User/User';
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useThemeDetector();
  const [isLoading, fetchedData, errorData] = useFetch('https://api.github.com/rate_limit');
  const theme = isDarkTheme ? 'dark' : 'light';
  
  let content = <Loader />;

  if (!isLoading && fetchedData) {
    const rateRemaining = fetchedData.rate.remaining;
    const rateLimit = fetchedData.rate.limit;

    content = (
      <div className={`App ${theme}`}>
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route path="/" element={<UserForm isDarkTheme={isDarkTheme} username={username} setUsername={setUsername} />} />
          <Route path="/:userId" element={<User isDarkTheme={isDarkTheme} rateRemaining={rateRemaining} rateLimit={rateLimit}/>} />
        </Routes>
      </div>
    );
  }
  else if (!isLoading && errorData) {
    content = <Error type={errorData} />;
  }
  return content;
}

export default App;