import React from 'react';
import { GlobalStyle } from './App.styles.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
