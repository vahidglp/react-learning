import { type ReactNode } from "react";

type Props = {
    theme: string;
    onChangeTheme: () => void;
}

const ThemeSwitch = ({ theme, onChangeTheme }: Props): ReactNode => {

    const handleToggleThemeButtonClick = (): void => {
        onChangeTheme();
    }

    return (
        <div>
            <p>{theme}</p>
            <button onClick={handleToggleThemeButtonClick}>Change Theme</button>
        </div>
    )
}

export default ThemeSwitch;