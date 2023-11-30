import background from "../assets/img/TentangKami.png";
import Foto1 from "../assets/img/foto1.png";
import Foto2 from "../assets/img/foto2.png";
import Foto3 from "../assets/img/foto3.png";
import Foto4 from "../assets/img/foto4.png";
import Foto5 from "../assets/img/foto5.png";
import Foto6 from "../assets/img/foto6.png";
import Foto7 from "../assets/img/foto7.png";
import Footer from "./Footer";

const TentangKami = () => {
    return (
        <div>
            <div>
                <section>
                    <div
                        className="bg-cover w-full h-96 mt-1"
                        style={{ backgroundImage: `url(${background})` }}
                    >
                        <div className="container">
                            <div className="ml-12 py-36"></div>
                        </div>
                    </div>
                </section>
                <div className="p-20">
                    <h2 className="mt-10 text-center font-bold text-slate-950">
                        TENTANG KAMI
                    </h2>
                    <p className="sm:text-justify xl:px-4 pb-4 text-slate-950 mt-10 text-center">
                        Selamat datang di platform digital kami yang
                        didedikasikan untuk memajukan demokrasi mahasiswa
                        melalui Pemilihan Umum BEM. Sebagai tim pengembang web,
                        kami dengan bangga menyajikan situs interaktif yang
                        tidak hanya memberikan informasi tentang calon-calon
                        BEM, tetapi juga merangkul semangat partisipasi dan
                        diskusi. Dengan fokus pada keamanan dan integritas
                        pemilihan, kami memastikan setiap suara dihitung dengan
                        akurat,
                        <br /> <br />
                        memberikan kepercayaan kepada setiap mahasiswa untuk
                        membentuk arah BEM dan menciptakan perubahan positif di
                        lingkungan kampus. Mari bersama-sama membangun budaya
                        partisipasi yang kuat, menjadikan suara mahasiswa
                        sebagai kekuatan utama dalam membentuk masa depan kampus
                        yang lebih baik.
                    </p>
                </div>
                <div>
                    <div className="ml-32 bg-primary w-40 rounded-xl font-bold sm:-ml-10">
                        <h2 className="ml-2 text-white ">Bertemu Tim Kami</h2>
                    </div>
                </div>
            </div>
            <div className="rounded-md mt-12 ">
                <div className=" md:flex flex-wrap md:mx-16 lg:flex flex-row justify-center pb-6 ">
                    <div>
                        <img
                            className="sm:w-10 ml-14  mb-4 md:w-60 lg:w-48"
                            src={Foto1}
                            alt="Gambar1"
                        />
                        <h3 className="text-center text-black  mt-2 mb-4 font-bold">
                            Tykea
                        </h3>
                    </div>
                    <div>
                        <img
                            className="sm:w-10 ml-14 md:w-60 md:mx-4 md:mb-4  lg:w-48 mx-8"
                            src={Foto2}
                            alt="Gambar1"
                        />
                        <h3 className="sm:font-bold text-center sm:text-black mb-6 lg:text-center text-black font-semibold mt-2">
                            Myra
                        </h3>
                    </div>
                    <div>
                        <img
                            className="sm:w-10 ml-14 md:w-60  lg:w-48"
                            src={Foto3}
                            alt="Gambar1"
                        />
                        <h3 className="sm:font-bold text-center sm:text-black  lg:text-center text-black font-semibold mt-2 md:text-center">
                            Amelia 
                        </h3>
                    </div>
                </div>
                <div className="md:flex flex-wrap mx-14 lg:flex flex-row justify-center pb-12">
                    <div className="md:mb-6">
                        <img
                            className="sm:w-10 md:w-60  lg:w-48"
                            src={Foto4}
                            alt="Gambar1"
                        />
                        <h3 className="sm:font-bold text-center sm:text-black mb-6 lg:text-center text-black font-semibold mt-2">
                            Muhammad Rizqi
                        </h3>
                    </div>

                    <div>
                        <img
                            className="sm:w-10 sm:mr-24 md:w-60 md:mx-4  lg:w-48 mx-8"
                            src={Foto5}
                            alt="Gambar1"
                        />
                        <h3 className="sm:font-bold text-center sm:text-black mb-6 lg:text-center text-black font-semibold mt-2">
                            Nazar Yosa
                        </h3>
                    </div>
                    <div>
                        <img
                            className="sm:w-10 md:w-60 md:mr-4  lg:w-48 mr-8"
                            src={Foto6}
                            alt="Gambar1"
                        />
                        <h3 className="sm:font-bold text-center sm:text-black mb-6 lg:text-center text-black font-semibold mt-2">
                            Rizki Ramdani
                        </h3>
                    </div>
                    <div>
                        <img
                            className="sm:w-10 md:w-60  lg:w-48"
                            src={Foto7}
                            alt="Gambar1"
                        />
                        <h3 className="sm:font-bold text-center sm:text-black md:text-center text-black font-semibold mt-2">
                            Galang Dwi
                        </h3>
                    </div>
                </div>
            </div>
           <Footer/>
        </div>

    );
};

export default TentangKami;
