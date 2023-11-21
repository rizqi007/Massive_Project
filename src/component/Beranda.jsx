import Case from "./Case";
import "../App.css";
import pemira from "../assets/img/pemira.png";
import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import Kumpulan from "../compontentheader/Index";
import Isi from "../componentIsi/Index";


const Beranda = () => {
  return (
  <div>
    <Kumpulan></Kumpulan>
    <Isi></Isi>
   
  
  
   <section>
      <div className="container m-auto py-5 rounded-md">
        <div className="flex flex-row justify-items-center rounded-2xl overflow-hidden shadow-2xl">
          <div className="basis-4/12  bg-gray-200">
            <img src={pemira} alt="" />
          </div>
          <div className="flex flex-col basis-7/12 ">
            <div className="pl-2 py-4">
              <div className="bg-green-500 rounded-l-lg text-white px-3 py-2">
                <h3>Sambutan dari ketua BEM</h3>
              </div>
            </div>
           
            <div  className=" flex flex-row">
              <div className="basis-6/12 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae, animi facilis nemo error earum.</p>
              </div>
             
              <div className="basis-6/12 px-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet fuga animi officia, numquam molestiae.</p>
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
          <div>

          </div>
        </div>
      </div>
   </section>
  </div>
   
   
  )
}

export default Beranda
