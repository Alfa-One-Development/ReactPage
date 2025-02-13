import "./Footer.css";

function Footer(props) {
    return (
        <footer className="footer">
        <img src={props.img} alt="Logo" />
        <imge src={props.imge} alt="Logo" />
        <p>{props.text}</p>
        <p>{props.texto}</p>
        </footer>
    );
}

export default Footer;