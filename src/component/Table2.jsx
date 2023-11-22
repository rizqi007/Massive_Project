import BEM from "../assets/img/BEM.png";
import ButtonTable from "../compontentheader/ButtonTable";

const Table2 = ({
    imgSrc,
    title,
    description
}

) => {
    
    // const{bem = {BEM}} = props;

    return (
        <div className="w-80  rounded-xl justify-center shadow-2xl mb-6 mr-5">
            <img className="w-44 h-36  mx-auto justify-items-center" src={imgSrc} alt="" />
            <div className="px-6 pb-6">
                <div className="font-bold text-lg mb-8 mt-8 text-black">
                    {title}
                </div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="flex items-center justify-center pb-5">
                
            </div>
        </div>
    );
};

export default Table2;