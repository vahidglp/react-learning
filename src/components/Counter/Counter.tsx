import type { Theme } from "@/App";
import { useState, type ReactNode } from "react";

type Props = {
    theme: Theme;
    title: string;
}

const Counter = ({ theme, title }: Props): ReactNode => {

    const [counter, setCounter] = useState<number>(0);

    const handleIncrementButtonClick = (): void => {
        setCounter(counter + 1);
    }

    const handleDecrementButtonClick = (): void => {
        setCounter(counter - 1);
    }

    return (
    <div className={`counter-container ${theme}`}>
            <div className="title">{title}</div>
            <div className="count">{counter}</div>
            <button className="increment" onClick={handleIncrementButtonClick}>Increment</button>
            <button className="decrement" onClick={handleDecrementButtonClick}>Decrement</button>
        </div>
    );
}

export default Counter;