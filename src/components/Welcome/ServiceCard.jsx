const ServiceCard = ({ title, color, icon }) => {
    return <div className="flex flex-row items-center border bg-glassmorphism p-2 hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color} `}>
            {icon}
        </div>
        <div className="ml-2">
            {title}
        </div>
    </div>;
};

export default ServiceCard;
