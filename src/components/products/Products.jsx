import Navbar from "../Navbar";
import ProductCard from "./ProductCard";
import data from "../../assets/products.json";

export default function Products() {
    const products = data;

    return (
        <div>
            <div className="box">
                <h1 className="title">Products</h1>
                <p>Check out our amazing products!</p>
            </div>
            <div className="columns is-multiline">
                {products.map((product) => (
                    <div key={product.id} className="column is-one-quarter">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
