import { Link } from "react-router-dom";

export default function MaterialLink({ name }) {
    return (
        <Link to={`/${name.toLowerCase()}`} className="material-link">
            {name}
        </Link>
    );
}
