import Header from "./Components/Header";
import imageLogo from "./assets/LogoG1.png";
import Lado from "./components/Lado";
import Footer from "./components/footer";
import imgGmail from "./assets/gmail.png";
import imgInsta from "./assets/instagram.png";
import imgGrupo from "./assets/GroupPhoto.jpeg";
import MeioDP from "./components/Meio";
import Felipe from "./assets/felipe.jpg";
import MuriloC from "./assets/murilocorreia.jpeg";
import MuriloB from "./assets/murilobesson.jpg";
import VitorH from "./assets/vitorhugo.jpg";
import William from "./assets/william.jpg";
import "./App.css";

function App() {
  return (
    <>
      <Header imageLogo={imageLogo} titulo="DESAFIO 1 DE PROPS - REACT" />

      <section className="main">
        <article className="meiasso">
          <MeioDP nome="Felipe Cagnin" image={Felipe} hobby="Flauta"></MeioDP>
          <MeioDP nome="Murilo Correia" image={MuriloC} hobby="Música"></MeioDP>
          <MeioDP nome="Vitor Hugo" image={VitorH} hobby="Futebol"></MeioDP>
          <MeioDP nome="Murilo Besson" image={MuriloB} hobby="Jogar"></MeioDP>
          <MeioDP
            nome="William Magno"
            image={William}
            hobby="Namorada"
          ></MeioDP>
        </article>

        <Lado valor1="Amizade" valor2="Proatividade" valor3="União" />
      </section>

      <Footer
        textEmail="GroupOne001@gmail.com"
        imgGmail={imgGmail}
        textInsta="GroupOneDesenvolvedor_"
        imgInsta={imgInsta}
        textGroup="Gruop AlfaOne Development"
        imgGrupo={imgGrupo}
      />
    </>
  );
}

export default App;
