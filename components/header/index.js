import NavBar from "./NavBar.js";
import TopSearch from "./TopSearch";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <TopSearch />
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
