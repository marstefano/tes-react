import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Produk</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Contact Me</a>
            </li>
        </ul>
    </nav>
  )
}