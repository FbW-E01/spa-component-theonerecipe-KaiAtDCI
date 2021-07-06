export default function Ingredients (props) {
    const ingredients = props.ingredients;
    return (
        <ul>
            {ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
    )
}