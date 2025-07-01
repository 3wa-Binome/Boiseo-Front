export default function ActionButton({ label, onClick }) {
    return (
        <button onClick={onClick} className="action-button">
            {label}
        </button>
    );
}
