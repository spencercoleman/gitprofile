import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target[0].value;
    
    if (username) {
      navigate(`/${username}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Enter your GitHub Username</label>
      <input name="username" type="text"></input>
    </form>
  );
}

export default App;
