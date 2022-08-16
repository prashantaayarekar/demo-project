import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-box">
      <div className="icons">
        <a href="/">
          <i class="fa-solid fa-list"></i>List
        </a>
        <a href="/register">
          <i class="fa-solid fa-user"></i>Register
        </a>
      </div>
    </div>
  );
}
