import { Logo } from "./Icons";
import ThemeSwitcher from "./ThemeSwitcher";
import './Header.css';

export default function Header() {
    return(      <header className="app-header flex justify-between align-center">
        <div className="logo-container">
            <a href="/">
                <Logo width={140} height={`100%`}/>
            </a>
        </div>
        <ThemeSwitcher />
      </header>)
}