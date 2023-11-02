import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <Logo />
      <SearchBar />
      <NavBar />
    </header>
  );
}

export default Header;
