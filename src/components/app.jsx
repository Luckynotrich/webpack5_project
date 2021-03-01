import "../style/index.scss";
import Recipes from "./recipes";
import sword from "../images/swc-sword.png"
import swordSvg from "../images/sword.svg"
const App = () => {
    return(
        <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Whats Shaken, React</h1>
            </section>
            <img src={sword} alt="Sword" width="250px"/>
            <img src={swordSvg} alt="Sword" width="250px"/>
            <Recipes />
        </main>
        
        </>
    )

}
export default App;