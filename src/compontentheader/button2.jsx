/* eslint-disable react/prop-types */


const Button2 = (props) => {
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn rounded-full w-32 bg-primary text-white border-none hover:bg-orange-600" onClick={()=>document.getElementById('my_modal_1').showModal()}>Detail</button>
<dialog key={props.id} id="my_modal_1" className="modal">
  <div  className="modal-box bg-white text-justify">
  <img src={props.image} alt="..." className=" max-w-96 max-h-64 object-cover rounded-lg ml-20 mb-4"/>
    <h3 className="font-bold text-lg">{props.sejak}</h3> 
    <p className="py-4">{props.detail}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-white text-primary border-none hover:bg-orange-700">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
  )
}

export default Button2