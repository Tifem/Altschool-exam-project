import React from "react";
import Home from "./components/Home";
import AllRepo from "./components/AllRepo";
import EachRepo from "./components/EachRepo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';


function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong!</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <section className="main-container">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/all-repo" element={<AllRepo />} />
              <Route path="/all-repo/:id" element={<EachRepo />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </section>
  );
}

export default App;
