import Navbar from "./component/Navbar";
import Router from "./component/Router";
import "./App.css";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-8">
                <Router />
            </main>
        </>
    );
}
