import globe from '../assets/globe.jpg';
export default function Header(){
    return(
        <header>
            <img src={globe} alt="globe" />
            <h1>My Travel Journal.</h1>
        </header>
    )
}