import Case from "./Case";
import Footer from "./Footer";
import BEM from "../assets/img/BEM.png";

const Tentang = () => {
    return (
        <div>
            <Case>
                <div className="p-10 mt-8">
                    <div className=" card lg:card-side xl:card-side bg-white shadow-2xl">
                        <figure>
                            <img className="w-80" src={BEM} alt="" />
                        </figure>
                        <div className=" px-4 lg:card-body xl:card-body w-10 mt-10 text-justify text-slate-950">
                            <p>
                                Sekolah Tinggi Manajemen Informatika dan
                                Komputer (STMIK) IKMI Cirebon berdiri
                                berdasarkan SK Mendiknas RI Nomor 120/D/O/2001
                                yang telah diperbaharui dengan SK Menristekdikti
                                RI Nomor 1/KPT/I/2015.Saat ini memiliki 5 (lima)
                                Program Studi yang terdiri dari 3 (tiga) Program
                                Studi Sarjana dan 2 (dua) Program Studi Diploma.
                                Program Studi Sarjana adalah Prodi Teknik
                                Informatika (S1), Prodi Rekayasa Perangkat Lunak
                                (S1), Prodi Sistem Informasi (S1) dan Program
                                Studi Diploma adalah Prodi Manajemen Informatika
                                (D3) dan Prodi Komputerisasi Akuntansi (D3)
                            </p>
                            <div className="card-actions justify-end"></div>
                        </div>
                    </div>
                    <div className="p-4 mt-6 ml-14">
                        <button className="lg: px-10 bg-primary hover:bg-orange-600 text-white font-bold py-2 px-14 rounded-full mt-4 mr-2">
                            Web Resmi
                        </button>
                        <button className="lg: px-10 bg-primary hover:bg-orange-600 text-white font-bold py-2 px-14 rounded-full mt-4 mr-2">
                            Youtube
                        </button>
                        <button className="lg: px-10 bg-primary hover:bg-orange-600 text-white font-bold py-2 px-14 rounded-full mt-4 mr-2">
                            Instagram
                        </button>
                        <button className="lg: px-10 bg-primary hover:bg-orange-600 text-white font-bold py-2 px-14 rounded-full mt-4 mr-2">
                            facebook
                        </button>
                        <button className="lg: px-10 bg-primary hover:bg-orange-600 text-white font-bold py-2 px-14 rounded-full mt-4 mr-2">
                            LinkedIn
                        </button>
                    </div>
                </div>
            </Case>
            <Footer />
        </div>
    );
};

export default Tentang;
