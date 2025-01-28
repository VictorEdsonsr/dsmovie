import "./styles.css";
import GithubIcon from "../../assets/github-icon.svg";

export default function index() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <img src={GithubIcon} alt="Github" />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
