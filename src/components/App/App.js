import { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [username, setUserName] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserName(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (username) {
      navigate(`/${username}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Enter your GitHub Username</label>
      <input id="username" type="text" value={username} onChange={handleChange}></input>
    </form>
  );
}

export default App;
