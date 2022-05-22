import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <UserForm username={username} setUsername={setUsername} />
  )
}

export default App;
