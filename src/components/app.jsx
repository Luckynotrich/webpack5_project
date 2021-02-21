import "../style/index.scss";
import Recipes from "./recipes";

const App = () => {
    return(
        <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Whats Shaken, React</h1>
            </section>
        </main>
        <Recipes />
        </>
    )

}
export default App;