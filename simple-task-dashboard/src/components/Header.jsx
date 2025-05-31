
{/* Header.jsx - A simple header component for the task dashboard. */}
function Header() {
    return (
        <header>
            <h1>Simple Task Dashboard</h1>
            {/* Navigation Bar */ }
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/tasks">Tasks</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header