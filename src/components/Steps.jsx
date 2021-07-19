export default function Title (props) {
    const steps = props.steps;
    return (
        <ul>
            {steps.map(step => <li>{step}</li>)}
        </ul>
    )
}