import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [length, setLength] = useState(8);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [symbols, setSymbols] = useState(false);
  // By the way, we forgot to consider number case

  const formHandler = (e) => {
    e.preventDefault();
    if (!(isUpperCase || isLowerCase || symbols)) return;

    // let password = Math.floor(Math.random() * Math.pow(10, length)).toString();
    const password = new Array(length);

    const characters = "abcdefghijklmnopqrstuvwxyz";
    // characters[0] = "A"; // string is primitive type, so it's immutable

    if (isLowerCase) {
      // 1/3 of the password should be lower case letters
      const amount = password.length / 3;

      for (let index = 0; index < amount; index++) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * password.length);
          // I think it should be calculated in this way.
          // When password.length is 8, the maximum randomIndex should be 7.
          // Math.random() is always lower than 1, so Math.random() * 8 is between 0 and 7.xxx
          // After applying Math.floor(), it will become an integer between 0 and 7.
          // Do you think it's correct? :O
        } while (password[randomIndex]); // This is to prevent getting same randomIndex in the previous for loops

        let randomLetter =
          characters[Math.floor(Math.random() * characters.length)];

        password[randomIndex] = randomLetter;
      }
    }

    console.log(password.join("")); // Now it returns string that consists of random lowercase letters
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
          type="number"
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
