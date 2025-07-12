import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainApp from './components/code/MainApp';
import About from './components/pages/About';
import Content from './components/pages/Content';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainApp/>} />
          <Route path="/about" element={<About/>} />
            <Route path="/content" element={<Content/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
