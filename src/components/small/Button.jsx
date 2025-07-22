function Button({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-primary cursor-pointer hover:bg-black transition-all duration-500 text-white px-6 py-3 rounded-3xl text-base [box-shadow:5px_5px_10px_0px_#A6ABBD80,_-5px_-5px_10px_0px_#FAFBFF]`}
    >
      {text}
    </div>
  );
}

export default Button;
