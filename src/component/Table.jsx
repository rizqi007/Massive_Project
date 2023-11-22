import BEM from "../assets/img/BEM.png";
import Button from "../compontentheader/Button";

const Table = () => {
    // const{bem = {BEM}} = props;

    return (
        <div className="rounded-xl overflow-hidden shadow-2xl mb-6 mr-5">
            <img className="w-sm" src={BEM} alt="" />
            <div className="px-6">
                <div className="font-bold text-xl mb-2">
                    Badan Eksekutif Mahasiswa
                </div>
                <p className="text-gray-700 text-base">sejak 2010</p>
            </div>
            <div className="flex items-center justify-center p-5">
                <Button />
            </div>
        </div>
    );
};

export default Table;
