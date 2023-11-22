import BagianTeks from "./BagianTeks";
import Button from "./Button";
import background from "../assets/img/bg2.png";

const Kumpulan = () => {
    return (
        <div>
            <section className="sm:w-full -mt-10">
                <div
                    className="bg-cover"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="container">
                        <div className="ml-12 py-36">
                            <BagianTeks></BagianTeks>
                            <Button 
                            button="Pilih Sekarang!!"></Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Kumpulan;
