import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [length, setLength] = useState("");
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false); // I changed some variable names to be coherent
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    // I think it was one of the causes, because when only 'hasNumbers' was true, this function stopped execution
    if (!(hasNumbers || hasUpperCase || hasLowerCase || hasSymbols)) return;

    const numbers = "0123456789";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = `/!@#$%^&*()_+-=[]{};':"|,.<>?`;
    const necessaryCharacters = [
      hasNumbers && numbers,
      hasUpperCase && characters.toUpperCase(),
      hasLowerCase && characters,
      hasSymbols && symbols,
    ].filter((value) => !!value);

    let password = "";
    let index = 0;

    for (let i = 0; i < length; i++) {
      const currentCharacters = necessaryCharacters[index];
      password +=
        currentCharacters[Math.floor(Math.random() * currentCharacters.length)];

      if (index === necessaryCharacters.length - 1) {
        index = 0;
        continue;
      }

      index++;
    }

    console.log(password);
    // setLength("");
    // setHasNumbers(false);
    // setHasUpperCase(false);
    // setHasLowerCase(false);
    // setHasSymbols(false);
  };

  // const password = new Array(length);
  // const amount = password.length / trueStates.length;
  // if (hasNumbers) {
  //   for (let index = 0; index < amount; index++) {
  //     let randomIndex;
  //     do {
  //       randomIndex = Math.floor(Math.random() * password.length);
  //     } while (password[randomIndex]);

  //     let randomLetter = numbers[Math.floor(Math.random() * numbers.length)];

  //     password[randomIndex] = randomLetter;
  //   }
  // }

  // if (isLowerCase) {
  //   for (let index = 0; index < amount; index++) {
  //     let randomIndex;
  //     do {
  //       randomIndex = Math.floor(Math.random() * password.length);
  //     } while (password[randomIndex]);

  //     let randomLetter =
  //       characters[Math.floor(Math.random() * characters.length)];

  //     password[randomIndex] = randomLetter;
  //   }
  // }

  // if (isUpperCase) {
  //   for (let index = 0; index < amount; index++) {
  //     let randomIndex;
  //     do {
  //       randomIndex = Math.floor(Math.random() * password.length);
  //     } while (password[randomIndex]);

  //     let randomLetter =
  //       characters[
  //         Math.floor(Math.random() * characters.length)
  //       ].toUpperCase();

  //     password[randomIndex] = randomLetter;
  //   }
  // }

  // if (symbols) {
  //   for (let index = 0; index < amount; index++) {
  //     let randomIndex;
  //     do {
  //       randomIndex = Math.floor(Math.random() * password.length);
  //     } while (password[randomIndex]);

  //     let randomLetter =
  //       specialCharacters[
  //         Math.floor(Math.random() * specialCharacters.length)
  //       ];

  //     password[randomIndex] = randomLetter;
  //   }
  // }
  // let result = password.join("");

  // // const [result, setResult] = useState(password.join(""));

  // if (result.length !== length) {
  //   let emptyNumber = length - result.length;
  //   const necessaryCharacters = [
  //     hasNumbers && numbers,
  //     isUpperCase && characters,
  //     isLowerCase && characters.toUpperCase(),
  //     symbols && specialCharacters,
  //   ].filter((value) => !!value);

  //   for (let index = 0; index < emptyNumber; index++) {
  //     result += necessaryCharacters[index][0];
  //   }
  // }

  // console.log(result);
  // return result;
  // };

  const lengthHandler = (e) => {
    const value = e.target.value;
    if (Number.isNaN(Number(value))) return;
    setLength(value);
  };
  const numbersHandler = () => setHasNumbers(!hasNumbers);
  const upperCaseHandler = () => setHasUpperCase(!hasUpperCase);
  const lowerCaseHandler = () => setHasLowerCase(!hasLowerCase);
  const symbolsHandler = () => setHasSymbols(!hasSymbols);

  return (
    <>
      <Navbar />
      <form
        onSubmit={formHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="length">Length of the password</label>
        <input
          id="length"
          // placeholder="Length of the password"
          value={length}
          onChange={lengthHandler}
          required
        />

        <label htmlFor="numbers">Include Number</label>
        <input
          type="checkbox"
          id="numbers"
          value={hasNumbers}
          onChange={numbersHandler}
        />

        <label htmlFor="uppercase">Include Uppercase</label>
        <input
          type="checkbox"
          id="uppercase"
          value={hasUpperCase}
          onChange={upperCaseHandler}
        />

        <label htmlFor="lowercase">Include Lowercase</label>
        <input
          type="checkbox"
          id="lowercase"
          value={hasLowerCase}
          onChange={lowerCaseHandler}
        />

        <label htmlFor="symbols">Include symbol</label>
        <input
          type="checkbox"
          id="symbols"
          value={hasSymbols}
          onChange={symbolsHandler}
        />

        <button type="submit">Create password</button>
      </form>
    </>
  );
};

export default Home;
