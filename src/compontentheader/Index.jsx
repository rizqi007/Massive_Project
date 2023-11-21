import BagianTeks from "./BagianTeks";
import Button from "./Button";
import bagcground from "../assets/img/bg2.png";

const Kumpulan =()=>{
    return(
        <div>
             <section className="sm:w-full -mt-10">
                <div className="bg-cover" style={{backgroundImage: `url(${bagcground})`,}}>
                <div className="container">
                    <div className="ml-12 py-32">
                        <BagianTeks></BagianTeks>
                        <Button></Button>
                    </div>
                </div>
                </div>
            </section>
        
        </div>
        

    )
}
export default Kumpulan;