import MaterialLink from "../atoms/MaterialLink";

export default function ProductMaterials({ materials = [] }) {
    return (
        <div className="product-materials">
            {materials.map((mat, idx) => (
                <MaterialLink key={idx} name={mat} />
            ))}
        </div>
    );
}
