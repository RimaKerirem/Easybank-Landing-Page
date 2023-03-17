import "./nav-item.css";

function NavItem({ title, handleClick }) {
  return (
    <li>
      <a href="/#" className="nav-item" onClick={handleClick}>
        {title}
      </a>
    </li>
  );
}

export default NavItem;
