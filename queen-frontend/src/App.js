import React from 'react';
import { GlobalStyle } from './App.styles.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import FileUpload from './components/file-loader/FileUpload';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <FileUpload />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
