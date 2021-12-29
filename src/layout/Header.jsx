function Header() {
    return (
        <nav className="deep-purple accent-2">
            <div className="nav-wrapper">
                <a
                    href="https://hrant01.github.io/react-movies-project/"
                    className="brand-logo"
                >
                    React Movies
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/HRANT01/react-movies-project">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
