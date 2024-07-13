import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <div
            className="card"
            onClick={() => navigate(`/products/${product.id}`)}
        >
            <div className="card-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="card-content">
                <h2 className="title">{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
}
