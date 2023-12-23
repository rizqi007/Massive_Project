/* eslint-disable react/prop-types */
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
        <div className="md:5 p-10 mt-20">
          <div className=" card lg:card-side xl:card-side bg-white shadow-2xl">
            <figure>
              <img className="w-80 lg:w-72" src={BEM} alt="" />
            </figure>
            <div className="md:card-body md:text-center  md:w-3 md:mt-2  lg:card-body lg:w-5 lg:mt-5 xl:card-body xl:w-10 xl:mt-10 text-justify text-slate-950">
                <p className="md:text-center">
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
          <div className="md:mt-8 lg:ml-8 lg:mb-32 xl:p-10 ml-10">
            <div className="flex">
              <ButtonWithModal
                buttonText="Website Resmi"
                modalId="my_modal_1"
                imgSrc={Website}
              />
              <ButtonWithModal
                buttonText="Youtube"
                modalId="my_modal_2"
                imgSrc={youtube}
              />
              <ButtonWithModal
                buttonText="Instagram"
                modalId="my_modal_3"
                imgSrc={Instagram}
              />
              <ButtonWithModal
                buttonText="Facebook"
                modalId="my_modal_4"
                imgSrc={Facebook}
              />
              <ButtonWithModal
                buttonText="LinkedIn"
                modalId="my_modal_5"
                imgSrc={LinkedIn}
              />
            </div>
          </div>
        </div>
      </Case>
      <Footer />
    </div>
  );
};

const ButtonWithModal = ({ buttonText, modalId, imgSrc }) => {
  return (
    <>
      <button
        className="btn ml-4 rounded-full w-40 bg-blur bg-primary text-white border-none hover:bg-orange-600"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        {buttonText}
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box  w-11/12 max-w-5xl bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img
            src={imgSrc}
            alt="..."
            className="max-w-lg object-cover rounded-lg m-auto mb-4 shadow-2xl"
          />
        </div>
      </dialog>
    </>
  );
};

export default Tentang;
