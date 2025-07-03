import MaterialLink from "../atoms/MaterialLink";

export default function ProductMaterials({ materials = [] }) {
    return (
        <div className="product-materials">
            {materials.map((mat) => (
                <MaterialLink key={mat.id} material={mat} />
            ))}
        </div>
    );
}
