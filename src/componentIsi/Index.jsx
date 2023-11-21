import BagianIsi from "./BagianIsi"
import BagianGambar from "./Gambar"

const Isi=()=>{
    return(
        <section className="mt-4 px-16 sm:flex-col lg:flex-row">
            <div className="">
                <div className="">
                     <BagianGambar></BagianGambar>
                     <BagianIsi></BagianIsi>
                </div>
                
                
              
            </div>
        </section>
    )
}
export default Isi;