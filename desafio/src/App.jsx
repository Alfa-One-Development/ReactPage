import Lado from "./components/lado";
import Footer from './components/footer'
import imgGmail from './assets/gmail.png'
import imgInsta from './assets/instagram.png'
import imgGrupo from './assets/GroupPhoto.jpeg'
import MeioDP from './components/Meio'
import './App.css'

function App() {
  return (
    <> 
      <section className="meiasso">
        <MeioDP nome="GrupOne001"></MeioDP>
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