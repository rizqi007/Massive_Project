import ketua from "../assets/img/ketua.png";
import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import whatsapp from "../assets/img/whatsapp.svg";

const Sambutan = () => {
    return (
        <section>
            <div className="container m-auto py-5 rounded-md -mt-10 mb-10 ">
                <div className="flex flex-row justify-items-center rounded-2xl overflow-hidden shadow-2xl">
                    <div className="basis-4/12  bg-gray-200">
                        <img src={ketua} className="ml-16" alt="" />
                    </div>
                    <div className="flex flex-col basis-7/12 shadow-xl ">
                        <div className="pl-2 py-4">
                            <div className="bg-green-500 rounded-l-lg text-white px-3 py-2 font-bold">
                                <h3>Sambutan dari ketua BEM</h3>
                            </div>
                        </div>

                        <div className=" flex flex-row">
                            <div className="basis-6/12 px-3 text-black text-justify">
                                <p>
                                    Saya merasa sangat bersyukur dan terhormat
                                    dapat berada di hadapan Anda semua pada
                                    kesempatan yang berbahagia ini.
                                    Pertama-tama, izinkan saya menyampaikan rasa
                                    terima kasih yang setinggi-tingginya kepada
                                    seluruh civitas akademika yang hadir di
                                    acara ini. Kehadiran kita semua di sini
                                    adalah cerminan dari semangat kebersamaan
                                    dan komitmen untuk bersama-sama memajukan
                                    kehidupan kampus.
                                </p>
                            </div>

                            <div className="basis-6/12 px-4 text-black text-justify">
                                <p>
                                    Sebagai Ketua Badan Eksekutif Mahasiswa,
                                    saya merasa amat bangga melihat antusiasme
                                    dan dedikasi yang luar biasa dari
                                    teman-teman mahasiswa dalam berbagai
                                    kegiatan akademik, sosial, dan budaya. Kita
                                    adalah satu komunitas yang beragam namun
                                    memiliki tujuan yang sama: mewujudkan kampus
                                    yang inklusif, progresif, dan berwawasan
                                    masa depan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/12 bg-gray-200 justify-items-center pt-4">
                        <div className="mx-auto my-2">
                            <img className="w-6 h-6" src={facebook} alt="" />
                        </div>
                        <div className="mx-auto my-2">
                            <img className="w-6 h-6" src={whatsapp} alt="" />
                        </div>
                        <div className="mx-auto my-2">
                            <img className="w-6 h-6" src={twitter} alt="" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Sambutan;
