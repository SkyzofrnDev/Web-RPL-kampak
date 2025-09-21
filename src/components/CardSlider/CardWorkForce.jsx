const CardWorkForce = ({ name, title, nip, image }) => {
  return (
    <div className="text-center text-white">
      <div className="w-[260px] h-[340px] mx-auto rounded-md mb-2 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
      </div>
      <h3 className="font-bold text-2xl">{name}</h3>
      <p className="text-lg">{title}</p>
      <hr className="my-1 border-gray-400 w-3/4 mx-auto" />
      <p className="text-sm">NIP : {nip}</p>
    </div>
  );
};

export default CardWorkForce;
