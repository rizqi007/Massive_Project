import Logo from "./logo";


const BagianTeks = () => {
    return (
        <div className="xl:grid grid-cols-2 gap-2">
            <div className="xl:col-start-1 col-end-3 mt-10">
                <h2 className="text-3xl xl:text-5xl text-oranye  font-bold mt-20">
                    PILIHANMU <br />
                    <span className="text-white"> MENENTUKAN</span>
                    <br /> MASA DEPANMU
                </h2>
                <a
                                href="pemira"
                                className="text-white mt-6 bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-base inline-flex items-center px-3 py-2.5 text-center ml-2"
                            >
                                Pilih Sekarang !!
                            </a>
            </div>
            <div className="sm:visible xl:col-end-7 col-span-1 invisible">
                <Logo />
            </div>
        </div>
    );
};
export default BagianTeks;
