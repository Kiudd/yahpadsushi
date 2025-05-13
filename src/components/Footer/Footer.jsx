import "./Footer.css"
import "./Footer.scss"

export default function Footer() {

return (
     <div className="footer">
      <div className="footer-lines">
        <div className="line" />
        <div className="line" />
      </div>
      <div className="footer-text">
        <p className="tagline">"L'art du sushi dans chaque bouchée"</p>
        <div className="socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.facebook.com/people/YahpadSushi-Perpignan/100082579208511/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.tiktok.com/@gagnelafoule" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok" />
          </a>
        </div>
        <p className="copy">&copy; 2025 Yahpadsushi</p>
      </div>
    </div>
);
}