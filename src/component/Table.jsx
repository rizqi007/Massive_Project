/* eslint-disable react/prop-types */
import "../App.css";

const Table = (props) => {
    return (
        <div className="max-w-32 rounded-xl justify-center shadow-xl mb-6 ">
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
                    onClick={() =>
                        document.getElementById("my_modal").showModal()
                    }
                >
                    Detail
                </button>
                <dialog id="my_modal" className="modal">
                    <div className="modal-box bg-white text-black">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-primary">
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg text-center mb-6 underline uppercase text-primary">
                            {props.sejak}
                        </h3>
                        <img
                            src={props.image}
                            alt="..."
                            className=" max-w-96 max-h-64 object-cover rounded-lg m-auto mb-4"
                        />

                        <p className="py-4 text-justify">{props.detail}</p>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Table;
