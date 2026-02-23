import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

export type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const handleChangeTheme = (): void => {
    setTheme((theme) => theme === "light" ? "dark" : "light");
  }

  return (
    <div className="app">
      <p>Hello Vahid jan</p>
      <ThemeSwitch theme={theme} onChangeTheme={handleChangeTheme} />
      <Counter theme={theme} title="counter 1" />
      <Counter theme={theme} title="counter 2" />
      <Counter theme={theme} title="counter 3" />
    </div>
  );
}

export default App;
