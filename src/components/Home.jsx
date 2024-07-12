import Navbar from "./Navbar";

export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <div className="box">
                <h1 className="title">Home</h1>
                <p>Welcome to our website!</p>
            </div>
        </div>
    );
}
