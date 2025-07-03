export default function ProductImage({ src, alt }) {
    return <img src={src || "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Begrippenlijst.svg"} alt={alt} className="product-image" />;
}
