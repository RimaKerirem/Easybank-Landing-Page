import "./header.css";
import { Container, NavItem, RequestButton } from "../../components/modules";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const navList = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Contact" },
    { id: 4, title: "Blog" },
    { id: 5, title: "Careers" },
  ];

  return (
    <header>
      <Container>
        <img src="/images/logo.svg" alt="" className="logo" />

        <nav>
          <ul className={openMenu ? "nav-items active" : "nav-items"}>
            {navList.map((li) => (
              <NavItem
                key={li.id}
                title={li.title}
                handleClick={() => setOpenMenu(false)}
              />
            ))}
          </ul>
        </nav>
        <RequestButton />
        <img
          src={
            openMenu ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"
          }
          alt=""
          className="hamburger-close"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </Container>
    </header>
  );
}

export default Header;
