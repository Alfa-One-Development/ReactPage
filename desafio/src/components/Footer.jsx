import "./Footer.css";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="bloco">
        <img src={props.imgGmail} alt="Logo" />
        <p>{props.textEmail}</p>
        </div>

        <div className="bloco">
        <img src={props.imgInsta} alt="Logo" />
        <p>{props.textInsta}</p>
        </div>

        <div className="GrupoImg">
        <img src={props.imgGrupo} alt="Logo" />
        <p>{props.textGroup}</p>
        </div>

        </footer>
    );
}

export default Footer;