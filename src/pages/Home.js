import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Films from "../components/Films";


const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <Logo />
            <Films />
        </div>
    )
}

export default Home;