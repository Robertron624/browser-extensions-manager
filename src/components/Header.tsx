import { Logo } from "./Icons";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Header.css";

export default function Header() {
  return (
    <header className="app-header flex justify-between align-center">
      <a className="logo-container" title="Go to homepage" href="/" target="_blank" rel="noopener noreferrer">
        <Logo width={140} height={`100%`} />
      </a>
      <ThemeSwitcher />
    </header>
  );
}
