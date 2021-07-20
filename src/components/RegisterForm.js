import { useState } from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
    email: "",
    emailRepeat: "",
  });

  function handleOnChange(event) {
    const value = event.target.value;
    const key = event.target.id;
    const newUser = { ...user };
    newUser[key] = value;
    setUser(newUser);
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
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit} className="RegisterForm">
      <input
        type="text"
        placeholder="username"
        name="username"
        id="username"
        onChange={handleOnChange}
        value={user.username}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        onChange={handleOnChange}
        value={user.password}
      />
      <input
        type="password"
        placeholder="repeat password"
        name="passwordRepeat"
        id="passwordRepeat"
        onChange={handleOnChange}
        value={user.passwordRepeat}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        onChange={handleOnChange}
        value={user.email}
      />
      <input
        type="email"
        placeholder="repeat email"
        name="emailRepeat"
        id="emailRepeat"
        onChange={handleOnChange}
        value={user.emailRepeat}
      />
      <button type="submit"> Register! </button>
    </form>
  );
}
