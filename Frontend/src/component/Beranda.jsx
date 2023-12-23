import Sambutan from "../componentIsi/Sambutan";
import "../App.css";
import Kumpulan from "../compontentheader/Index";
import Isi from "../componentIsi/Index";
import Footer from "./Footer";

const Beranda = () => {
    return (
        <div>
            <Kumpulan />
            <Isi />
            <Sambutan />
            <Footer />
        </div>
    );
};

export default Beranda;
