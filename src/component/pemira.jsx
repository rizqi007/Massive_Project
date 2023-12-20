import paslon1 from "../assets/img/paslon1.png";
import paslon2 from "../assets/img/paslon2.png";
import Footer from "./Footer";

const pemira = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 ml-16 mt-20 p-6 text-black">
                    <h2 className="font-bold text-2xl">Daftar Kandidat</h2>
                    <h3>Ketua BEM</h3>
                    <p className="text-sm">2023/2024</p>
                </div>
                <div className="mt-20 ml-36 p-6">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        className="btn bg-primary text-white border-none hover:bg-orange-600 rounded-full"
                        onClick={() =>
                            document.getElementById("my_modal_3").showModal()
                        }
                    >
                        Pilih Sekarang !!
                    </button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box bg-white">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                            </form>
                            <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                                <h2 className="text-2xl font-light text-black mb-5 text-center">
                                    LOGIN
                                </h2>
                                <div className="mb-4">
                                    <input
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="username"
                                        type="text"
                                        placeholder="NIM"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        className="bg-white shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    <a
                                        href="Pemira2"
                                        className="text-white w-96 ml-2 bg-primary hover:bg-orange-600 font-medium rounded-lg text-base flex items-center  px-3 py-2.5 text-center mr-2"
                                    >
                                        <p className="flex items-center m-auto">
                                            Login
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="w-full m-auto h-10 flex bg-slate-400 rounded-md">
                                <h2 className="text-xs text-slate-600 flex items-center m-auto ">
                                    Pemira BEM 2023
                                </h2>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>

            <div className="grid grid-cols-12 ml-20">
                <div className="col-start-1 col-end-6 ml-26 border-2 rounded-xl border-primary">
                    <p className="font-primary ml-2 mt-2">1.</p>
                    <img
                        src={paslon1}
                        alt="..."
                        className=" w-80 rounded-lg m-auto mb-4 mt-2"
                    />
                    <h5 className="text-xs ml-32 text-black mb-2">
                        Muhammad Rizki Fadillah dan Anas Alfarizi
                    </h5>
                </div>
                <div className="col-start-7 col-end-12 col-span-4 mr-26 border-2 rounded-xl border-primary">
                    <p className="font-primary ml-2 mt-2">2.</p>
                    <img
                        src={paslon2}
                        alt="..."
                        className=" w-80 rounded-lg m-auto mb-4 mt-2"
                    />
                    <p className="text-xs ml-36 text-black mb-6">
                        Muhammad Abdullah dan Rifki Ananda
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-12 mb-20">
                <div className="col-start-1 col-end-6 ml-20 text-justify mt-5 items-center">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        className="btn ml-48 rounded-full w-32 bg-blur bg-primary text-white border-none hover:bg-orange-600"
                        onClick={() =>
                            document.getElementById("my_modal_6").showModal()
                        }
                    >
                        Visi & Misi
                    </button>
                    <dialog id="my_modal_6" className="modal">
                        <div className="modal-box bg-white text-black">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                            </form>
                            <h4 className="text-center mb-4">
                                Visi, Misi & Proker
                            </h4>
                            <p>
                                Visi : IKMI Menatap Indonesia.
                                <br />
                                <br />
                                Misi :<br />
                                - Peningkatan Iptek dan Kreativitas mahasiswa
                                dalam menghadapi revolusi industry 4.0.
                                <br />
                                - Optimalisasi Minat dan Bakat mahasiswa IKMI.
                                <br />
                                - Inisiator pergerakan STMIK IKMI Kota Cirebon.
                                <br />
                                - Revitalisasi Tata Laksana Organisasi
                                kemahasiswaan Sekolah Tinggi Ilmu Manajemen dan Komputer IKMI (STMIK
                                IKMI).
                                <br />
                                - Membangun sinergitas antara mahasiswa dan
                                alumni dalam menghadapi dunia kerja.
                                <br />
                                <br />
                                Program Kerja Unggulan:
                                <br />
                                - Kongres Mahasiswa IKMI
                                <br />
                                - Lokakarya IKMI
                                <br />
                                - PEMA Advocacy Center
                                <br />
                                - Scoter (Scholarship Center)
                                <br />
                                - IKMI Olympic Games
                                <br />
                                - Podas (Pondok Cerdas)
                                <br />
                            </p>
                        </div>
                    </dialog>
                </div>

                <div className="col-end-7 col-span-2 "></div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                    className="btn ml-60 rounded-full w-32 bg-blur -mt-12 bg-primary text-white border-none hover:bg-orange-600"
                    onClick={() =>
                        document.getElementById("my_modal_8").showModal()
                    }
                >
                    Visi & Misi
                </button>
                <dialog id="my_modal_8" className="modal">
                    <div className="modal-box bg-white text-black">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h4 className="text-center mb-4">
                            Visi, Misi & Proker
                        </h4>
                        <p>
                            Visi : Eskalasi Karya, Bergerak bersama IKMI untuk
                            Indonesia.
                            <br />
                            <br />
                            Misi:
                            <br />
                            - Eskalasi Sinergi dan Kolaborasi Internal serta
                            eksternal.
                            <br />
                            - Eskalasi Prestasi dan minat bakat mahasiswa yang
                            inovatif.
                            <br />
                            - Eskalasi Peran dan Partisipasi civitas akademika
                            dengan semangat kekeluargaan.
                            <br />
                            - Eskalasi Advokasi yang solutif.
                            <br />
                            - Eskalasi pergerakan mahasiswa yang proaktif dan
                            dinamis dengan semangat intelektual.
                            <br />
                            - Eskalasi Pengabdian masyarakat yang berdampak dan
                            berkelanjutan.
                            <br />
                            <br />
                            Program Kerja Unggulan:
                            <br />
                            - IKMI Expo
                            <br />
                            - Ruang ASA (Alumni dan Mahasiswa)
                            <br />
                            - Kita Serasi (Sobat Serap Aspirasi)
                            <br />
                            - Abdi IKMI
                            <br />
                        </p>
                    </div>
                </dialog>

                <div />
            </div>
            <Footer />
        </div>
    );
};

export default pemira;
