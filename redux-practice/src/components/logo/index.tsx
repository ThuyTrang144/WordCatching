import "./styles.css";
import logo from "@assets/images/logo.jpg";

interface LogoProps {
  href: string,
}

function Logo({ href }: LogoProps) {
  return (
    <div className="logo" data-testid="logo">
      <a href={href}>
        <img src={logo} alt="logo" className="logo__image" />
      </a>
      <div className="logo__text-group">
        <span className="logo__text">Guess The Picture</span>
        <span className="logo__text--addon">Gamespace</span>
      </div>
    </div>
  );
}

export default Logo;
