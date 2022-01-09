import './App.css';
import React from "react";
import Counter from "./components/counter/counter";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import {Nav} from 'react-bootstrap';

function App() {

  return (
    <div className="App">

      <Nav>
        <Nav.Item>
          <Nav.Link href="/counter">Counter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/link">Link</Nav.Link>
        </Nav.Item>
      </Nav>

      <BrowserRouter>
        <Routes>
            <Route path="/counter" element={<Counter />}/>
          <Route path="/link" element={<p>Hi</p>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
