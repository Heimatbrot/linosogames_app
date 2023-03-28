import React, { useState } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import './App.css';

function App() {
  const pages = [
    { id: 1, component: <Page1 /> },
    { id: 2, component: <Page2 /> },
    { id: 3, component: <Page3 /> },
    { id: 4, component: <Page4 /> },
    { id: 5, component: <Page5 /> },
    { id: 6, component: <Page6 /> },
  ];

  const [activePage, setActivePage] = useState(pages[0].id);

  const handleClick = (index) => {
    setActivePage(pages[index].id);
  };

  const handleTitleClick = () => {
    handleClick(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="apptitle" onClick={handleTitleClick}>Linoso Games</h1>
      </header>
      <nav>
        {pages.map((page) =>
          page.id === activePage ? (
            <div key={page.id}>{page.component}</div>
          ) : null
        )}
      </nav>
      <div className="menu">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => handleClick(index)}
            className={`links icon-button ${page.id === activePage ? 'selected' : ''}`}
          >
            {/* empty button */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
