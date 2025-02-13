import Footer from './components/footer'
import MeioDP from './components/Meio'
import Img from './assets/gmail.png'
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

    <Footer text = "GrupOne001@gmail.com"
    img = {Img}
    texto = "Copyright 2021 GrupOne001"
    imge = {Img}
    /> 

    </>
  )
}

export default App
