import background from "../assets/img/TentangKami.png";
import Foto1 from "../assets/img/foto1.png"
import Foto2 from "../assets/img/foto2.png"
import Foto3 from "../assets/img/foto3.png"
import Foto4 from "../assets/img/foto4.png"
import Foto5 from "../assets/img/foto5.png"
import Foto6 from "../assets/img/foto6.png"
import Foto7 from "../assets/img/foto7.png"

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
                    <div className="ml-32 bg-primary w-40 rounded-xl font-bold">
                        <h2 className="ml-2 text-white">Bertemu Tim Kami</h2>
                        </div>
                </div>
            </div>
            <div className="rounded-md mt-12">
              <div className="flex flex-row justify-center pb-6 ">
                <div >
                  <img className="sm:w-10 md:w-20 lg:w-40" src={Foto1} alt="Gambar1" />
                  <h3 className="text-center text-black font-semibold mt-2">Tykea</h3>
                </div>
                <div >
                  <img className="sm:w-10 md:w-20  lg:w-40 mx-8" src={Foto2} alt="Gambar1" />
                  <h3 className="text-center text-black font-semibold mt-2">Myra</h3>
                </div>
                <div >
                  <img className="sm:w-10 md:w-20  lg:w-40" src={Foto3} alt="Gambar1" />
                  <h3 className="text-center text-black font-semibold mt-2">Amelia</h3>
                </div>
              </div>
              <div className="flex flex-row justify-center pb-12">
                <div>
                  <img className="sm:w-10 md:w-20  lg:w-40" src={Foto4} alt="Gambar1" />
                  <h3 className="text-center text-black font-semibold mt-2">Muhammad Rizqi</h3>
                </div>
                
                <div>
                  <img className="sm:w-10 md:w-20  lg:w-40 mx-8" src={Foto5} alt="Gambar1" />
                  <h3 className="text-center text-black font-semibold mt-2">Nazar Yosa</h3>
                </div>
                <div>
                  <img className="sm:w-10 md:w-20  lg:w-40 mr-8" src={Foto6} alt="Gambar1" />
                  <h3 className="text-center text-black font-semibold mt-2">Rizki Ramdani</h3>
                </div>
                <div>
                  <img className="sm:w-10 md:w-20  lg:w-40" src={Foto7} alt="Gambar1" />
                  <h3 className="text-center text-black font-semibold mt-2">Galang Dwi</h3>
                </div>

              </div>
            </div>
            {/* <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 text-black text-end">
  <div className=" flex flex-wrap ">
    <div className=" w-72 h-48 flex flex-wrap  ">
      <div className="w-full p-1 md:p-2 ">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Foto1} />
      </div>
      <h5>Tykea</h5>
    </div>
    <div className="w-72 h-48 flex flex-wrap ">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center "
          src={Foto2} />
      </div>
      <h5>Myra</h5>
    </div>
    <div className="w-72 h-48 flex flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Foto3} />
      </div>
      <h5>Amel</h5>
    </div>
    <div className="w-72 h-48 flex flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Foto4} />
      </div>
      <h5>Muhammad Rizqi</h5>
    </div>
    <div className="w-72 h-48 flex flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Foto5}/>
      </div>
      <h5>Nazar rojak</h5>
    </div>
    <div className="w-72 h-48 flex flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Foto6} />
         
      </div>
      <h5>Rizki</h5>
    </div>
    <div className="w-72 h-48 flex flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={Foto7} />
         
      </div>
      <h5>Galang</h5>
    </div>
  </div>
</div> */}

        </div>
    );
};

export default TentangKami;
