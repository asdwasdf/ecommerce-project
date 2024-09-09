import HeaderSticky from "./header-sticky/HeaderSticky";
import HeaderTop from "./header-top/HeaderTop";

const Header = () => {
  return (
    <header className="ts-header">
      <HeaderTop />
      <HeaderSticky />
    </header>
  );
};

export default Header;
