function Footer() {
    return (
        <footer className="page-footer purple darken-4">
            <div className="footer-copyright container">
                © {new Date().getFullYear()} Copyright Text
                <a
                    className="grey-text text-lighten-4 right"
                    href="https://github.com/HRANT01/react-movies-project"
                >
                    Repo
                </a>
            </div>
        </footer>
    );
}

export { Footer };
