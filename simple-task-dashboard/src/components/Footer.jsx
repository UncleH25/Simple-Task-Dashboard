import '../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2025 Simple Task Dashboard</p>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/tasks">Tasks</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;