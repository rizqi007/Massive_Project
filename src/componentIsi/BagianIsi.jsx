/* eslint-disable react/no-unescaped-entities */
import pemira from "../assets/img/pemira.png";

const BagianIsi = () => {
    return (
        <div className="flex justify-center p-20">
            <div className="flex-1 text-gray-700 text-center  px-4 py-2 m-2">
                <img className="w-85" src={pemira} alt="" />
            </div>
            <div className="flex-1 text-primary border-4 rounded-xl border-primary text-center  px-4 py-2 m-2">
                <div className="">
                    <h3 className="text-center text-black text-xl font-bold py-2">
                        Apa itu Pemira?
                    </h3>
                    <p className="px-4 pb-4">
                        "Pemira merupakan pesta demokrasi mahasiswa yang
                        dilaksanakan setiap tahunnya untuk menentukan Presiden
                        dan Wakil Presiden Mahasiswa (Presma & Wapresma) secara
                        berpasangan, dan anggota Dewan Perwakilan Mahasiswa
                        (DPM) yang bersifat perseorangan".
                    </p>
                </div>
            </div>
        </div>
    );
};
export default BagianIsi;
