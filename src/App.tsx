import { type ReactNode, type MouseEvent, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

export type Theme = "light" | "dark";

type User = {
  username: string;
  password: string;
};

function App(): ReactNode {

   const [counter, setCounter] = useState(0);
  // const [user, setUser] = useState<Readonly<User>>({
  //   username: "vahid golpayegani",
  //   password: "1234",
  // });

  // const handleButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
  //   console.log("Hello");
  //   console.info(e.currentTarget.tagName);
  //   handelIncrement();
  // };

  // const handelIncrement = (): void => {
  //   setCounter((counter) => counter + 1);
  //   setCounter((x) => x + 1);
  // };

  // const handleButtonChangePassword = (): void => {
  //   setUser({
  //     ...user,
  //     password: "4321",
  //   });
  // };

  const [theme, setTheme] = useState<Theme>("light");

  const handleChangeTheme = (): void => {
    setTheme((theme) => theme === "light" ? "dark" : "light");
  }

  return (
    <div className="app">
      {/* <p>Hello Vahid jan</p>
      <button onClick={handleButtonClick}>Say Hello</button>
      <p>{counter}</p>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleButtonChangePassword}>Change Password</button> */}
      <ThemeSwitch theme={theme} onChangeTheme={handleChangeTheme} />
      <Counter theme={theme} title="counter 1" />
      <Counter theme={theme} title="counter 2" />
      <Counter theme={theme} title="counter 3" />
    </div>
  );
}

export default App;
