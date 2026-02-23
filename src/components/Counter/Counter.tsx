import type { Theme } from "@/App";
import { useState, type PropsWithChildren, type ReactNode } from "react";

type Props = PropsWithChildren<{
    theme: Theme;
    title: string;
}>

const Counter = ({ theme, title, children }: Props): ReactNode => {

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
            <p>{children}</p>
        </div>
    );
}

export default Counter;