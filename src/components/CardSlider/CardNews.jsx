const CardNews = ({ title, description, image }) => {
  return (
    <div className="text-center text-white">
      <div className="w-full h-[280px] mx-auto rounded-md mb-2 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
      </div>
      <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default CardNews;
