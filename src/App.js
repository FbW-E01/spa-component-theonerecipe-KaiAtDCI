import Title from "./components/Title.jsx";
import Ingredients from "./components/Ingredients.jsx";
import Steps from "./components/Steps.jsx"
import Footer from "./components/Footer";
import './App.css';

export default function App() {
    const recipes = [
      { title: 'Recipe 1', ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3'], steps: ['step 1', 'step 2', 'step 3']},
      { title: 'Recipe 2', ingredients: ['ingredient 4', 'ingredient 5', 'ingredient 6'], steps: ['1. ...', '2. ...', '3. ...']},
    ];
    const recipeIndex = 0

    return (
        <>
            <div className="App">
                <main>
                    <Title title={recipes[recipeIndex].title}/>
                    <Ingredients ingredients={recipes[recipeIndex].ingredients}/>
                    <Steps steps={recipes[recipeIndex].steps}/>
                </main>
                <Footer/>
            </div>
        </>
    )
}



