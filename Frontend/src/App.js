import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import Cart from "./components/Cart";
import BookDetail from "./components/Book/BookDetail";





function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Books />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
