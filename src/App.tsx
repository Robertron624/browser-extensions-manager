
import './App.css'
import FilterButtons from './components/FilterButtons';
import Header from './components/Header'
import ExtensionsList from './components/Extensions/ExtensionsList';

function App() {

  return (
    <div className="app">
      <Header/>      
      <main>
        <h1>
          Extensions List
        </h1>
        <div className="filters-section">
          <FilterButtons />
        </div>
        <div className="extensions-section">
          <ExtensionsList />
        </div>
      </main>
    </div>
  );
}

export default App
