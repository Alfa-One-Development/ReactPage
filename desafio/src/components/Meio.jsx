import "./styles/Meio.css";

function MeioDP(props) {
    return (
        <section className="meiasso">
          <article>
            <h1>{props.nome}</h1>
            <img src={props.image} alt="Foto de Perfil" />
            <p>{props.hobby}</p>
          </article>
      </section>
    )
}

export default MeioDP;