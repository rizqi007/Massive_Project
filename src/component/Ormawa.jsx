import Case from "./Case";
import Table from "./Table";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Footer from "./Footer";
import Adcom from "../assets/img/Adcom.png";
import Himatif from "../assets/img/himatif.png";
import Himsic from "../assets/img/himsic.png"
import Icrt from "../assets/img/icrt.png"
import Icgd from "../assets/img/icgd.png";
import Musik from "../assets/img/musik.png";
import Voli from "../assets/img/ivoc.jpg";
import Badminton from "../assets/img/Badminton.png";
import Futsal from "../assets/img/Futsal.png";
import Mapala from "../assets/img/Mapala.jpg";
import Himsi from "../assets/img/Himsi.jpg";
import Himka from "../assets/img/Himka.jpg";




const Ormawa = () => {
    return (
        <div>
            <Case>
                <div className="max-w-full">
                    <h4 className="text-2xl text-center mb-10">
                        Halaman Ormawa
                    </h4>

                    <div className="flex">
                        <Table2 
                        imgSrc={Icrt}
                        title="IKMI Cirebon Robotic 
                            Team"
                        />
                        
                        <Table3 
                        imgSrc={Himsic}
                        title="Himpunan Mahasiswa IKMI Ciamis-Galuh"
                        
                        />
                        <Table  
                        imgSrc={Icgd}
                        title="IKMI Kreatif Graphic Design "
                        />
                        <Table 
                        imgSrc={Musik}
                        title="Ukm Musik"
                        />
                    </div>
                    <div className="flex">
                         <Table  
                        imgSrc={Voli}
                        title="IKMI VolleyBall Club"
                        />
                        <Table  
                        imgSrc={Badminton}
                        title="IKMI Badminton Club"
                        />
                         <Table2 
                        imgSrc={Adcom}
                        title="Android Developer 
Community"
                        />
                        <Table  
                        imgSrc={Futsal}
                        title="Futsal STMIK IKMI "
                        />
                    </div>
                    <div className="flex">
                        <Table  
                        imgSrc={Mapala}
                        title="Mahasiswa Pecinta Alam"
                        />
                         <Table  
                        imgSrc={Himatif}
                        title="Himpunan Mahasiswa 
Teknik Informatika"
                        />
                        
                         <Table  
                        imgSrc={Himka}
                        title="Himpunan Mahasiswa 
Komputerisasi Akuntansi"
                        />
                         <Table  
                        imgSrc={Himsi}
                        title="Himpunan Mahasiswa 
Sistem Informasi"
                        />
                    </div>
                </div>
            </Case>
            <Footer />
        </div>
    );
};

export default Ormawa;
