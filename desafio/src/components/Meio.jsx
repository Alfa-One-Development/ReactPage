import "../styles/Meio.css";

function MeioDP(props) {
    return (
          <article>
            <h1>{props.nome}</h1>
            <img src={props.image} alt="Foto de Perfil" />
            <p>{props.hobby}</p>
          </article>
    )
}

export default MeioDP;