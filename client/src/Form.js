import { useEffect, useState } from "react";
import Axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const createUser = () => {
    Axios.post("http://localhost:3002/createUsers", {
      name,
      age,
    }).then((res) => {
      alert("user created");
      window.location.reload(true);
    });
  };

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='number'
        placeholder='age'
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Submit</button>
    </div>
  );
}

export default Form;
