import { useState } from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handlePasswordRepeatChange(event) {
    setPasswordRepeat(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleEmailRepeatChange(event) {
    setEmailRepeat(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errorCount = 0;
    if (password.length < 10) {
      console.log("Password must be at least 10 characters long");
      let ErrorCount = errorCount + 1;
    }
    if (password !== passwordRepeat) {
      console.log("Passwords do not match");
      let ErrorCount = errorCount + 1;
    }
    if (email !== emailRepeat) {
      console.log("Emails do not match");
      let ErrorCount = errorCount + 1;
    }
    if (errorCount > 0) {
      alert("Please try again");
      return;
    }
    console.log(errorCount);

    console.log({
      username,
      password,
      email,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="RegisterForm">
      <input
        type="text"
        placeholder="username"
        name="username"
        id="username"
        onChange={handleUsernameChange}
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <input
        type="password"
        placeholder="repeat password"
        name="passwordRepeat"
        id="passwordRepeat"
        onChange={handlePasswordRepeatChange}
        value={passwordRepeat}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        onChange={handleEmailChange}
        value={email}
      />
      <input
        type="email"
        placeholder="repeat email"
        name="emailRepeat"
        id="emailRepeat"
        onChange={handleEmailRepeatChange}
        value={emailRepeat}
      />
      <button type="submit"> Register! </button>
    </form>
  );
}
