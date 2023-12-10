/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Case from "./Case";
//import Table from "./Table";
import Footer from "./Footer";
import ormawaGambar from "./ormawaGambar";
import { useState } from "react";

const Ormawa = () => {
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({})

    const handleClick = (e) => {
        setShowModal(true)
        // console.log("ini id komponen ", e);
        setDataModal(ormawaGambar[e - 1])
    }
    // console.log("ini data yang dicari ", dataModal);

    return (
        <div>
            {showModal && (
                <Modal
                    id={dataModal.id}
                    image={dataModal.image}
                    title={dataModal.title}
                    sejak={dataModal.sejak}
                    detail={dataModal.detail}
                    setShowModal={setShowModal}
                />
            )}
            <Case>
                <div className="max-w-full mt-28">
                    <h4 className="text-2xl text-center mb-10 font-bold text-black">
                        Halaman Ormawa
                    </h4>


                    <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-8 transition-all">

                        {ormawaGambar.map((contents, index) => (
                            <Table
                                id={contents.id}
                                image={contents.image}
                                title={contents.title}
                                sejak={contents.sejak}
                                detail={contents.detail}
                                handleClick={handleClick}
                                showModal={showModal}
                            />
                        ))}

                    </div>
                </div>
            </Case>
            <Footer />
        </div>
    );
};

const Table = (props) => {

    return (
        <div className=" max-w-32 rounded-xl justify-center shadow-xl mb-6 " key={props.id}>
            <img
                src={props.image}
                alt="..."
                className=" max-w-96 max-h-64 object-cover rounded-lg"
            />
            <div className="px-6 pb-2 mt-5 ">
                <div className="font-bold text-1 mb-2 text-black">
                    {props.title}
                </div>
                <p className="text-gray-700 text-xs mb-10">{props.sejak}</p>
            </div>
            <div className="container flex items-center justify-center pb-5">
                {/* MODALS */}
                <button
                    key={props.id}
                    className=" btn rounded-xl w-32 bg-blur bg-primary text-white border-none hover:bg-orange-600"
                    onClick={
                        (e) => props.handleClick(props.id)
                    }

                >
                    Detail 
                </button>

            </div>
        </div>
    );
};

const Modal = (props) => {
    return (
        // kalian styling sendiri
        <div className="shadow-xl absolute p-5 border z-10 place-content-center mt-64 mx-96 bg-white rounded-md justify-center m-auto " >
            <p className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-primary" onClick={() => props.setShowModal(false)}>X</p>
            <p className="font-bold text-center underline decoration-solid text-primary">
                {props.sejak}
            </p>
            <div>
                <img src={props.image} className="m-auto p-auto mt-6" alt="" />
            </div>
            
            <p className="font-normal my-5  text-center  text-black">
            {props.detail}
            </p>
            
        </div>
    )
}


export default Ormawa;
