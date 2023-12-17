import Sekali from "../assets/img/time.png";
import Swal from "sweetalert2";
import Success from "../assets/img/success.png"

function Ontime() {
  const Toast = Swal.mixin({
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
});
Toast.fire({
  imageUrl: Success,
  imageWidth: 150,
  imageHeight: 150,
  imageAlt: "Success",
  title: 'Terimakasih Sudah Memilih !!',
});
  return (
    <div>
              <img className="w-fit h-46" src={Sekali} alt="" />
    </div>
  )
}

export default Ontime