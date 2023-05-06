import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Menu from "./Menu.jsx";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const alertFunction = () => {
    alert("Clicked");
  };
  const updateName = (event) => {
    setName(event.target.value);
  };

  const sendForm = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    // console.log(name, "\n", email); This code prints out the contents but it adds a space to the left of the email variable. This is because the console.log() function adds a space between the arguments. To avoid this, we can use the following code:  console.log(name + "\n" + email);
    console.log(name + "\n" + email);
  };

  const [user, setUser] = useState({
    first_name: "Empty",
    last_name: "Empty",
    email: "Empty",
  });

  /*
  The code below sets up a function that will be called when the component is rendered. This function will fetch data from the API and then set the user state with the data returned from the API. The function is called getUser() and it is called when the component is rendered. This is done by passing an empty array as the second argument to the useEffect() function. This is because the useEffect() function is called when the component is rendered and when the component is updated. If we pass an empty array as the second argument to the useEffect() function, the function will only be called when the component is rendered. If we pass an array with a variable as the second argument to the useEffect() function, the function will be called when the component is rendered and when the variable changes. If we pass an array with a variable as the second argument to the useEffect() function, the function will be called when the component is rendered and when the variable changes.
  
  */

  const getUser = () => {
    fetch("https://reqres.in/api/users/g")
      .then((response) => response.json())
      .then((json) => {
        if (json.data) {
          setUser(json.data);
        }
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  // The code below is the same as the code above.

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <form>
        <Menu title="Site Fatec" name="Name" links={4} />
        <p onClick={alertFunction}>Dados</p>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <hr />
        {/* <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        type="text"
        placeholder="Enter your name"
      /> */}
        <input
          onChange={updateName}
          type="text"
          placeholder="Enter your name"
        />
        <br />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Enter your email"
        />
        <br />
        <button type="button" onClick={sendForm}>
          Submit
        </button>
      </form>
      <hr />
      <p>Example</p>

      <p>
        Nome: {user.first_name} {user.last_name}
      </p>
      <p></p>
    </>
  );
}

export default App;

// This file is the entrypoint of the application;
