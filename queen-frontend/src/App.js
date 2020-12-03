import React from 'react';
import { GlobalStyle } from './App.styles.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import FileUpload from './components/file-loader/FileLoader';
import DataTable from './components/Table/DataTable';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <FileUpload />
      </main>
      <DataTable />
      <Footer />
    </>
  );
}

export default App;
