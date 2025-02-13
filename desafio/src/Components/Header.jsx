
import "./Header.css" 
function Header(props) {

    return(
        <>

<div className="Reboco">
<p>{props.texto}</p>
<img src= {props.Img} alt="Logo"/>
</div>
        
        </>
    )
}

export default Header;