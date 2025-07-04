import { Link } from "react-router-dom";

export default function MaterialLink({ material }) {
    return (
        <Link to={`/materials/${material.id}`} className="material-link">
            {material.name.toLowerCase()}
        </Link>
    );
}
