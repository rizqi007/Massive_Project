import paslon1 from "../assets/img/paslon1.png";
import paslon2 from "../assets/img/paslon2.png";
import Footer from "./Footer";
import Swal from "sweetalert2";

const pemira = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
    Toast.fire({
        icon: "success",
        title: "Login Sukses",
    });

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 ml-16 mb-10 mt-20 p-6 text-black">
                    <h2 className="font-bold text-4xl">
                        Selamat Datang,{" "}
                        <span className="font-light">Rizqi!</span>{" "}
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-12 ml-20 mb-40">
                <div className="col-start-1 col-end-6 ml-26 border-2 rounded-xl bg-slate-300 border-primary">
                    <p className="font-primary ml-2 mt-2">1.</p>
                    <img
                        src={paslon1}
                        alt="..."
                        className=" w-96 rounded-lg m-auto mb-4 mt-2"
                    />
                    <h5 className="text-xs ml-32 text-black mb-2">
                        Muhammad Rizki Fadillah dan Anas Alfarizi
                    </h5>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        className="btn ml-48 mt-8 rounded-full w-32 bg-blur  bg-primary text-white border-none hover:bg-orange-600 mb-6"
                        onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                        }
                    >
                        Pilih
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="p-14 mt-10 pt-0 text-center bg-white rounded-xl">
                            <svg
                                className="mt-16 w-40 h-40 text-orange-500 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                                Apakah kamu yakin?
                            </h3>
                            <a
                                href="Pemira2"
                                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                            >
                                Tidak, Batalkan
                            </a>
                            <a
                                href="pemira"
                                className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
                            >
                                Ya, Saya Yakin
                            </a>
                        </div>
                    </dialog>
                </div>
                <div className="col-start-7 col-end-12 col-span-4 mr-26 border-2 bg-slate-300 rounded-xl border-primary">
                    <p className="font-primary ml-2 mt-2">2.</p>
                    <img
                        src={paslon2}
                        alt="..."
                        className=" w-96 rounded-lg m-auto mb-4 mt-2"
                    />
                    <p className="text-xs ml-36 text-black mb-6">
                        Muhammad Rizki Fadillah dan Anas Alfarizi
                    </p>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        className="btn ml-48 mt-4 rounded-full w-32 bg-blur  bg-primary text-white border-none hover:bg-orange-600 mb-6"
                        onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                        }
                    >
                        Pilih
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="p-6 pt-0 text-center bg-white rounded">
                            <svg
                                className="mt-2 w-20 h-20 text-red-600 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                                Apakah kamu yakin?
                            </h3>
                            <a
                                href="pemira"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
                            >
                                Yes, Saya Yakin
                            </a>
                            <a
                                href="Pemira2"
                                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                            >
                                No, Batalkan
                            </a>
                        </div>
                    </dialog>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default pemira;
