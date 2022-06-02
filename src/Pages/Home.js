import React, { useState, useRef } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [length, setLength] = useState("");
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [realPassword, setRealPassword] = useState("");

  const spanRef = useRef();

  const copyToClipboard = () => {
    let value = spanRef.current.innerText;
    navigator.clipboard.writeText(value);
    alert("Copied to clipboard : " + value);
  };

  const formHandler = (e) => {
    let password = "";
    e.preventDefault();
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

    setRealPassword(password);
  };

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
      <span ref={spanRef}>{realPassword}</span>
      {realPassword && (
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
      )}
    </>
  );
};

export default Home;
