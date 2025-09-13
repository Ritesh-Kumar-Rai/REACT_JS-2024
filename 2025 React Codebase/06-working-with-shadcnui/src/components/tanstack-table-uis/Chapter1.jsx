import data from "@/constants/data";
const Chapter1 = () => {
    return (
        <ul>
            {data.map((entry) => <li>{`${entry.label}  |  ${entry.date}  |  ${entry.category}  ||  ${entry.type}  ||  ${entry.amount}`}</li>)}
        </ul>
    )
}

export default Chapter1;