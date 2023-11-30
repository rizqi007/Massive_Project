import Case from "./Case";
import Footer from "./Footer";
import BEM from "../assets/img/BEM.png";
import Website from "../assets/img/Webresmi.png";
import youtube from "../assets/img/Youtube.png";
import Instagram from "../assets/img/Instagram.png";
import Facebook from "../assets/img/Facebook.png";
import LinkedIn from "../assets/img/Linkedin.png";

const Tentang = () => {
    return (
        <div>
            <Case>
                <div className="p-10 mt-20">
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
                    <div className="xl:p-10 ml-10">
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button
                            className="btn rounded-full w-40 bg-blur bg-primary text-white border-none hover:bg-orange-600"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_1")
                                    .showModal()
                            }
                        >
                            Website Resmi
                        </button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box  w-11/12 max-w-5xl bg-white">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <img
                                    src={Website}
                                    alt="..."
                                    className=" max-w-lg object-cover rounded-lg m-auto mb-4 shadow-2xl"
                                />
                            </div>
                        </dialog>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button
                            className="btn ml-4 rounded-full w-40 bg-blur bg-primary text-white border-none hover:bg-orange-600"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_2")
                                    .showModal()
                            }
                        >
                            Youtube
                        </button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box  w-11/12 max-w-5xl bg-white">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <img
                                    src={youtube}
                                    alt="..."
                                    className=" max-w-lg object-cover rounded-lg m-auto mb-4 shadow-2xl"
                                />
                            </div>
                        </dialog>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button
                            className="btn ml-4 rounded-full w-40 bg-blur bg-primary text-white border-none hover:bg-orange-600"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_3")
                                    .showModal()
                            }
                        >
                            Instagram
                        </button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box  w-11/12 max-w-5xl bg-white">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <img
                                    src={Instagram}
                                    alt="..."
                                    className=" max-w-lg object-cover rounded-lg m-auto mb-4 shadow-2xl"
                                />
                            </div>
                        </dialog>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button
                            className="btn ml-4 rounded-full w-40 bg-blur bg-primary text-white border-none hover:bg-orange-600"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_4")
                                    .showModal()
                            }
                        >
                            Facebook
                        </button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box  w-11/12 max-w-5xl bg-white">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <img
                                    src={Facebook}
                                    alt="..."
                                    className=" max-w-lg object-cover rounded-lg m-auto mb-4 shadow-2xl"
                                />
                            </div>
                        </dialog>
                        <button
                            className="btn ml-4 rounded-full w-40 bg-blur bg-primary text-white border-none hover:bg-orange-600"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_5")
                                    .showModal()
                            }
                        >
                            LinkedIn
                        </button>
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box  w-11/12 max-w-5xl bg-white">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <img
                                    src={LinkedIn}
                                    alt="..."
                                    className=" max-w-lg object-cover rounded-lg m-auto mb-4 shadow-2xl"
                                />
                            </div>
                        </dialog>
                    </div>
                </div>
            </Case>
            <Footer />
        </div>
    );
};

export default Tentang;
