import { useParams } from "react-router-dom";
import data from "../../assets/products.json";

export default function ProductForm() {
    const { id } = useParams();

    const [product] = data.filter((product) => product.id === parseInt(id));

    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-4">
                    <form>
                        <div className="field">
                            <label htmlFor="name">Product name:</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    defaultValue={product ? product.name : ""}
                                    //onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="description">Description:</label>
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    rows={3}
                                    id="description"
                                    name="description"
                                    defaultValue={
                                        product ? product.description : ""
                                    }
                                    //onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="price">Price:</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    rows={3}
                                    id="price"
                                    name="price"
                                    defaultValue={product ? product.price : ""}
                                    //onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="card-image">
                            <img
                                src={product ? product.image : ""}
                                alt={product ? product.name : ""}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="image">Image URL:</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    rows={3}
                                    id="image"
                                    name="image"
                                    defaultValue={product ? product.image : ""}
                                    //onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    type="submit"
                                    className="button is-primary is-fullwidth"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
