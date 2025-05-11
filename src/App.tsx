
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <img src="/path-to-your-logo.svg" alt="Extensions logo" />
          <h1>Extensions</h1>
        </div>
        <ThemeSwitcher />
      </header>
      
      <main>
        {/* Your other app content goes here */}
        <h2>Welcome to your browser extension</h2>
        <p>This content will respond to your theme settings!</p>
      </main>
    </div>
  );
}

export default App
