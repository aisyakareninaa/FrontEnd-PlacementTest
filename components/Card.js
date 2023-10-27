const Card = ({ title, description, img }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={img} alt={title} className="w-full h-40 object-cover" />
            <div className="px-6 py-4">
                <div className="text-black flex items-center mb-2">
                    <span className="font-bold text-xl">{title}</span>
                    {description && <span className="mx-2">|</span>}
                    <span className="text-base mx-2">{description || "No description available."}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
