const Button = ({
    // eslint-disable-next-line react/prop-types
    button,
}) => {
    return (
        <button className=" bg-green-600 xl:bg-green-600 text-white px-4 py-2 rounded-full mt-4">
            {button}
        </button>
    );
};
export default Button;
