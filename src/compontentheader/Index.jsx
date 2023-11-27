import BagianTeks from "./BagianTeks";
import background from "../assets/img/bg.png";

const Kumpulan = () => {
    return (
        <div>
            <section className="w-full">
                <div
                    className="lg:bg-cover xl:bg-cover"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="container">
                        <div className="ml-12 py-36">
                            <BagianTeks />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Kumpulan;
