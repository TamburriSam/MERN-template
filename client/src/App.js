import { useEffect, useState } from "react";
import Axios from "axios";
import uniqid from "uniqid";
import Form from "./Form";
function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/getUsers").then((res) => {
      setListOfUsers(res.data);
    });
  }, []);

  return (
    <div className='App'>
      <div className='Users-display'>
        {listOfUsers.map((user) => {
          return (
            <div key={uniqid()}>
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
            </div>
          );
        })}
      </div>
      <Form createUser={createUser} />
    </div>
  );
}

export default App;
