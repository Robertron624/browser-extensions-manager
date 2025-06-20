
import './App.css'
import FilterButtons from './components/FilterButtons';
import Header from './components/Header'

function App() {

  return (
    <div className="app">
      <Header/>      
      <main>
        <h1>
          Extensions List
        </h1>
        <FilterButtons />
      </main>
    </div>
  );
}

export default App
