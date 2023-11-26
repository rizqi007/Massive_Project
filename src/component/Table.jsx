/* eslint-disable react/prop-types */
import "../App.css";

const Table = (props) => {
    return (
        <div
            key={props.id}
            className="max-w-32 rounded-xl justify-center shadow-xl mb-6 "
        >
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
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                    key={props.id}
                    className="btn rounded-xl w-32 bg-blur bg-primary text-white border-none hover:bg-orange-600"
                    onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                    }
                >
                    Detail
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-white text-black">
                        <img
                            src={props.image}
                            alt="..."
                            className=" max-w-96 max-h-64 object-cover rounded-lg ml-20 mb-4"
                        />
                        <h3 className="font-bold text-lg">{props.sejak}</h3>
                        <p className="py-4">{props.detail}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-primary text-white border-none hover:bg-orange-600">
                                    Tutup
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Table;
