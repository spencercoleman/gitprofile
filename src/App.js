import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useFetch } from "./hooks/http";
import { useThemeDetector } from "./hooks/theme";
import GlobalStyle from "./styles/GlobalStyle";
import UserForm from "./components/UserForm/UserForm";
import User from './components/User/User';
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [username, setUsername] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useThemeDetector();
  const [isLoading, fetchedData, errorData] = useFetch('https://api.github.com/rate_limit');
  const theme = isDarkTheme ? 'dark' : 'light';

  return (
    <>
      <ScrollToTop />
      <GlobalStyle theme={theme} />

      {!isLoading && fetchedData ? (
          <Routes>
              <Route path="/" element={<UserForm username={username} setUsername={setUsername} />} />
              <Route path="/:userId" element={<User isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} rateRemaining={fetchedData.rate.remaining} rateLimit={fetchedData.rate.limit}/>} />
              <Route path="*" element={<Error />} />
          </Routes>
      ) : (
        <Loader theme={theme} />
      )}

      {errorData && <Error type={errorData} />}
    </>
  );
}

export default App;