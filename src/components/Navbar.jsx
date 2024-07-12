export default function Navbar() {
    return (
        <header>
            <nav
                className={"navbar"}
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-start">
                    <a href="/" className="navbar-item">
                        Home
                    </a>
                    <a href="/contact" className="navbar-item">
                        Contact
                    </a>
                    <a href="/products" className="navbar-item">
                        Products
                    </a>
                </div>
            </nav>
        </header>
    );
}
