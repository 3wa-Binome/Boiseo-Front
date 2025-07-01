import ActionButton from "../atoms/ActionButton";

export default function ProductActions({ onAdd }) {
    return (
        <div>
            <ActionButton label="Ajouter au panier" onClick={onAdd} />
        </div>
    );
}
