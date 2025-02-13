import "./Footer.css";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="bloco">
        <img src={props.imgGmail} alt="Logo" />
        <p>{props.text}</p>
        </div>

        <div className="bloco">
        <img src={props.imgInsta} alt="Logo" />
        <p>{props.texto}</p>
        </div>

        <div className="bloco">
        <img src={props.imgGrupo} alt="Logo" />
        <p>{props.textos}</p>
        </div>

        </footer>
    );
}

export default Footer;