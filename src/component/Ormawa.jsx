import Case from "./Case";
import Table from "./Table";
import Footer from "./Footer";
import ormawaGambar from "./ormawaGambar";

const Ormawa = () => {
    return (
        <div>
            <Case>
                <div className="max-w-full mt-28">
                    <h4 className="text-2xl text-center mb-10 font-bold text-black">
                        Halaman Ormawa
                    </h4>

                    <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-8 transition-all ">
                    {ormawaGambar.map(contents => (
                    <Table
                        key={contents.id}
                        image={contents.image}
                        title={contents.title}
                        sejak={contents.sejak}
                        detail={contents.detail}
                    />
                ))} 
                    </div>
                </div>
            </Case>
            <Footer />
        </div>
    );
};

export default Ormawa;
