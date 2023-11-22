import Case from "./Case";
import Table from "./Table";
import Footer from "./Footer";

const Ormawa = () => {
    return (
        <div>
            <Case>
                <div className="max-w-full">
                    <h4 className="text-2xl text-center mb-10">
                        Halaman Ormawa
                    </h4>

                    <div className="flex">
                        <Table />
                        <Table />
                        <Table />
                        <Table />
                    </div>
                    <div className="flex">
                        <Table />
                        <Table />
                        <Table />
                        <Table />
                    </div>
                    <div className="flex">
                        <Table />
                        <Table />
                        <Table />
                        <Table />
                    </div>
                </div>
            </Case>
            <Footer />
        </div>
    );
};

export default Ormawa;
