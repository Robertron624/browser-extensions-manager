
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className="app">
      <Header/>      
      <main>
        <h2>Welcome to your browser extension</h2>
        <p>This content will respond to your theme settings!</p>
      </main>
    </div>
  );
}

export default App
