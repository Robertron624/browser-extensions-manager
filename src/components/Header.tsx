import { Logo } from "./Icons/Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import './Header.css';

export default function Header() {
    return(      <header className="app-header flex justify-between align-center">
        <div className="logo-container">
            <Logo width={140} height={`100%`}/>
        </div>
        <ThemeSwitcher />
      </header>)
}