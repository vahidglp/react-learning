import { type ReactNode, type MouseEvent, useState } from "react";
import "./App.css";

type User = {
  username: string;
  password: string;
};

function App(): ReactNode {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState<Readonly<User>>({
    username: "vahid golpayegani",
    password: "1234",
  });

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    console.log("Hello");
    console.info(e.currentTarget.tagName);
    handelIncrement();
  };

  const handelIncrement = (): void => {
    setCounter((counter) => counter + 1);
    setCounter((x) => x + 1);
  };

  const handleButtonChangePassword = (): void => {
    setUser({
      ...user,
      password: "4321",
    });
  };

  return (
    <>
      <p>Hello Vahid jan</p>
      <button onClick={handleButtonClick}>Say Hello</button>
      <p>{counter}</p>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleButtonChangePassword}>Change Password</button>
    </>
  );
}

export default App;
