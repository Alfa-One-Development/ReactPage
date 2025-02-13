import Lado from "./components/lado";
import Footer from './components/footer'
import MeioDP from './components/Meio'
import Img from './assets/gmail.png'
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
        <section className="meiasso">
<MeioDP nome = "GrupOne001"></MeioDP>
</section>

    <Footer text = "GrupOne001@gmail.com"
    img = {Img}
    texto = "Copyright 2021 GrupOne001"
    imge = {Img}
    /> 

    </>
  );
}

export default App;