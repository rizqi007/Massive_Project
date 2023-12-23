/* eslint-disable react/no-unescaped-entities */
import pemira from "../assets/img/pemira.png";

const BagianIsi = () => {
    return (
        <div className="lg:flex flex-row xl:flex justify-center p-20 -mt-5 md:justify-center">
            <div className=" xl:flex-1 text-gray-700 text-center mt-4 px-4 py-2 m-2">
                <img className="" src={pemira} alt="" />
            </div>
            <div className="md:justify-center ml-12 xl:flex-1 text-primary border-4 rounded-xl border-primary text-center mr-20 px-4 py-2 m-2 mt-24 mb-32">
                <div className="">
                    <h3 className="xl:text-center text-black text-xl font-bold py-2">
                        Apa itu Pemira?
                    </h3>
                    <p className=" xl:text-black px-4 pb-4">
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
