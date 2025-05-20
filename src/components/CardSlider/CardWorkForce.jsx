const CardWorkForce = ({ name, title, nip }) => {
  return (
    <div className="text-center text-white">
      <div className="w-[260px] h-[340px] bg-gray-300 mx-auto rounded-md mb-2" />
      <h3 className="font-bold text-2xl">{name}</h3>
      <p className="text-lg">{title}</p>
      <hr className="my-1 border-gray-400 w-3/4 mx-auto" />
      <p className="text-sm">NIP : {nip}</p>
    </div>
  );
};

export default CardWorkForce;
