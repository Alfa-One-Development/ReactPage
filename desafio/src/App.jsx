import Lado from "./components/lado";
import Footer from './components/footer'
import imgGmail from './assets/gmail.png'
import imgInsta from './assets/instagram.png'
import imgGrupo from './assets/GroupPhoto.jpeg'
import MeioDP from './components/Meio'
import './App.css'
import Felipe from './assets/felipe.jpg'
import MuriloC from './assets/murilocorreia.jpeg'
import MuriloB from './assets/murilobesson.jpg'
import VitorH from './assets/vitorhugo.jpg'
import William from './assets/william.jpg'

function App() {
  return (
    <>
        <section className="meiasso">
<MeioDP nome = "Felipe Cagnin" image = {Felipe} hobby = "Flauta"></MeioDP>
<MeioDP nome = "Murilo Correia" image = {MuriloC} hobby = "Música"></MeioDP>
<MeioDP nome = "Vitor Hugo" image = {VitorH} hobby = "Futebol"></MeioDP>
<MeioDP nome = "Murilo Besson" image = {MuriloB} hobby = "Jogar"></MeioDP>
<MeioDP nome = "William Magno" image = {William} hobby = "Namorada"></MeioDP>
</section>

<Lado valor1 = "Amizade"
      valor2 = "Proatividade"
      valor3 = "União" />

    <Footer textEmail = "GroupOne001@gmail.com"
    imgGmail = {imgGmail}
    textInsta = "GroupOneDesenvolvedor_"
    imgInsta = {imgInsta}
    textGroup = "Gruop AlfaOne Development"
    imgGrupo = {imgGrupo}
/>

    </>
  );
}

export default App;