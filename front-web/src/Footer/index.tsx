import './styles.css';
import { ReactComponent as Youtube } from '../Footer/youtube.svg';
import { ReactComponent as Linkedin } from '../Footer/linkedin.svg';
import { ReactComponent as Instagram } from '../Footer/instagram.svg';
function Footer() {

    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/afranioz-analista-programador/" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/in/afranioz-analista-programador/" target="_new">
                    <Linkedin />

                </a>
                <a href="https://www.linkedin.com/in/afranioz-analista-programador/" target="_new">
                    <Instagram />

                </a>
            </div>
        </footer>
    )
}

export default Footer