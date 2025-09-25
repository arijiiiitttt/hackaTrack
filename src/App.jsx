import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/pages/About';
import Content from './components/pages/Content';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import MainApp from './components/code/MainApp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default landing page with redirect logic */}
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Navigate to="/content" />
              </SignedIn>
              <SignedOut>
                <MainApp />
              </SignedOut>
            </>
          }
        />

        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route
            path="/content"
            element={
              <ProtectedRoute>
               <Content/>
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Auth pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </Router>
  );
}


export default App;
