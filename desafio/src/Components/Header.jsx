import "./Header.css"

function Header(props) {

    return(
        <>

<header className="Reboco">
<h1>{props.titulo}</h1>
<img src= {props.imageLogo} alt="Logo"/>
</header>
        
        </>
    )
}

export default Header;