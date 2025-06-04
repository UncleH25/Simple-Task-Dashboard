import '../styles/home.css';

function Home() {
    return (
        <main className="home-main">
            {/* Welcome section */}
            <section className="welcome-section">
                <h2>Welcome to the Simple Task Dashboard</h2>
                <p>Organize your tasks efficiently and stay productive!</p>
                <a className="cta-button" href="/tasks">Go to Tasks</a>
            </section>
            {/* Features section */}
            <section className="features-section">
                <h3>Features</h3>
                <ul className="features-list">
                    <li>✅ Add, edit, and delete tasks</li>
                    <li>✅ Mark tasks as complete</li>
                    <li>✅ Simple and clean interface</li>
                </ul>
            </section>
        </main>
    );
}

export default Home;