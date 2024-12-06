const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="flex flex-col items-center justify-start w-[400px] h-[400px] border-2 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-[250px]">
                <img src={imageUrl} alt={title} className="w-full h-[250px] object-cover" />
            </div>

            <div className="px-4 pt-4">
                {
                    title.length > 30 ?  <h2 className="text-xl font-semibold text-center">{title}</h2>  : <h2 className="text-xl font-semibold text-center">{title} <br/><br/> </h2>
                    
                }
            </div>
            <div className="px-4 pb-4">
                <p className="text-sm  mt-2 text-justify">{description.length > 160 ? `${description.slice(0, 158)} ...` : description}</p>
            </div>
        </div>
    );
};

export default Card;
