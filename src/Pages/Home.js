import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [length, setLength] = useState(8);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    let password = Math.floor(Math.random() * Math.pow(10, length)).toString();

    const characters = "abcdefghijklmnopqrstuvwxyz";
    characters[0] = "A";
    console.log(characters[0]);

    if (isLowerCase) {
      //   1/3 of the password should be lower case letters

      const amount = password.length / 3;

      for (let index = 0; index < 4; index++) {
        let randomIndex = Math.floor(Math.random() * (password.length - 1));

        let randomLetter =
          characters[Math.floor(Math.random() * (characters.length - 1))];

        password[randomIndex] = randomLetter;
        console.log(password);
      }

      console.log("lowercase");
    }

    console.log(password);
  };

  const lengthHandler = (e) => {
    const value = e.target.value;

    if (value > 21) {
      setLength(21);
    }

    setLength(value);
    console.log(value);
  };

  const uppercaseHandler = (e) => setIsUpperCase(!isUpperCase);
  const lowerCaseHandler = (e) => setIsLowerCase(!isLowerCase);
  const symbolsHandler = (e) => setSymbols(!symbols);

  return (
    <>
      <Navbar />
      <form onSubmit={formHandler}>
        <input
          placeholder="Length of the password"
          onChange={lengthHandler}
          value={length}
        />
        <label htmlFor="symbols">Include Upper Case</label>
        <input
          type="checkbox"
          value={isUpperCase}
          onChange={uppercaseHandler}
        />
        <label htmlFor="symbols">Include Lower Case</label>
        <input
          type="checkbox"
          value={isLowerCase}
          onChange={lowerCaseHandler}
        />
        <label htmlFor="symbols">Include symbol</label>
        <input
          type="checkbox"
          id="symbols"
          value={symbols}
          onChange={symbolsHandler}
        />
        <button type="submit" onSubmit={formHandler}>
          Create password
        </button>
      </form>

      <h1>Home Page</h1>
    </>
  );
};

export default Home;
