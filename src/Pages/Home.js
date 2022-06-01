import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [length, setLength] = useState(15);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const trueStates = [hasNumbers, isUpperCase, isLowerCase, symbols].filter(
    (value) => !!value
  );

  // By the way, we forgot to consider number case

  const formHandler = (e) => {
    e.preventDefault();
    if (!(isUpperCase || isLowerCase || symbols)) return;

    let x = 1;
    x = 2;
    console.log(x);

    // let password = Math.floor(Math.random() * Math.pow(10, length)).toString();
    const password = new Array(length);
    const amount = password.length / trueStates.length;
    const numbers = "0123456789";
    if (hasNumbers) {
      for (let index = 0; index < amount; index++) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * password.length);
        } while (password[randomIndex]); // This is to prevent getting same randomIndex in the previous for loops

        let randomLetter = numbers[Math.floor(Math.random() * numbers.length)];

        password[randomIndex] = randomLetter;
      }
    }

    const characters = "abcdefghijklmnopqrstuvwxyz";
    // characters[0] = "A"; // string is primitive type, so it's immutable

    if (isLowerCase) {
      for (let index = 0; index < amount; index++) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * password.length);
        } while (password[randomIndex]); // This is to prevent getting same randomIndex in the previous for loops

        let randomLetter =
          characters[Math.floor(Math.random() * characters.length)];

        password[randomIndex] = randomLetter;
      }
    }

    if (isUpperCase) {
      for (let index = 0; index < amount; index++) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * password.length);
        } while (password[randomIndex]); // This is to prevent getting same randomIndex in the previous for loops

        let randomLetter =
          characters[
            Math.floor(Math.random() * characters.length)
          ].toUpperCase();

        password[randomIndex] = randomLetter;
      }
    }

    const specialCharacters = `/!@#$%^&*()_+-=[]{};':"|,.<>?`;

    if (symbols) {
      for (let index = 0; index < amount; index++) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * password.length);
        } while (password[randomIndex]); // This is to prevent getting same randomIndex in the previous for loops

        let randomLetter =
          specialCharacters[
            Math.floor(Math.random() * specialCharacters.length)
          ];

        password[randomIndex] = randomLetter;
      }
    }
    let result = password.join("");

    // const [result, setResult] = useState(password.join(""));

    if (result.length !== length) {
      let emptyNumber = length - result.length;
      const necessaryCharacters = [
        hasNumbers && numbers,
        isUpperCase && characters,
        isLowerCase && characters.toUpperCase(),
        symbols && specialCharacters,
      ].filter((value) => !!value);

      for (let index = 0; index < emptyNumber; index++) {
        result += necessaryCharacters[index][0];
      }
    }

    console.log(result);
    return result;
  };

  const lengthHandler = (e) => {
    const value = e.target.value;

    if (value > 21) {
      setLength(21);
    }

    setLength(Number(value));
    console.log(value);
  };

  const numbersHandler = (e) => setHasNumbers(!hasNumbers);
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
        <label htmlFor="numbers">Include Numbers</label>
        <input
          type="checkbox"
          id="numbers"
          value={hasNumbers}
          onChange={numbersHandler}
        />
        <label htmlFor="uppercase">Include Upper Case</label>
        <input
          type="checkbox"
          id="uppercase"
          value={isUpperCase}
          onChange={uppercaseHandler}
        />
        <label htmlFor="lowercase">Include Lower Case</label>
        <input
          type="checkbox"
          id="lowercase"
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
        <button type="submit">Create password</button>
      </form>

      <h1>Home Page</h1>
    </>
  );
};

export default Home;
