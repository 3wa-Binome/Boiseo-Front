import { Link } from "react-router-dom";

export default function ProductTitle({ title }) {
    return (
        <h2 className="product-title">
            <Link to={`/${encodeURIComponent(title)}`}>{title}</Link>
        </h2>
    );
}