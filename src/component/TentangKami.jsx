import Case from "./Case";
import background from "../assets/img/TentangKami.png";

const TentangKami = () => {
    return (
        <div>
            <Case>
                <div>
                    <section className="-mt-8">
                        <div
                            className="bg-cover max-h-100"
                            style={{ backgroundImage: `url(${background})` }}
                        >
                            <div className="container">
                                <div className="ml-12 py-36"></div>
                            </div>
                        </div>
                    </section>
                    <h2 className="mt-10 text-center font-bold text-slate-950">
                        TENTANG KAMI
                    </h2>
                    <p className="px-4 pb-4 text-slate-950 mt-10 text-justify">
                        Selamat datang di platform digital kami yang
                        didedikasikan untuk memajukan demokrasi mahasiswa
                        melalui Pemilihan Umum BEM. Sebagai tim pengembang web,
                        kami dengan bangga menyajikan situs interaktif yang
                        tidak hanya memberikan informasi tentang calon-calon
                        BEM, tetapi juga merangkul semangat partisipasi dan
                        diskusi. Dengan fokus pada keamanan dan integritas
                        pemilihan, kami memastikan setiap suara dihitung dengan
                        akurat, 
                        memberikan kepercayaan kepada setiap mahasiswa
                        untuk membentuk arah BEM dan menciptakan perubahan
                        positif di lingkungan kampus. Mari bersama-sama
                        membangun budaya partisipasi yang kuat, menjadikan suara
                        mahasiswa sebagai kekuatan utama dalam membentuk masa
                        depan kampus yang lebih baik.
                    </p>
                </div>
                <div>
                    
                </div>
            </Case>
        </div>
    );
};

export default TentangKami;
