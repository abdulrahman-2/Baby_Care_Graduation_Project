const InputFelid = ({ ...rest }) => {
  return (
    <div>
      <label className="block text-lg font-bold mb-1" htmlFor={rest.name}>
        {rest.label}
      </label>
      <input
        type={rest.type}
        name={rest.name}
        id={rest.name}
        placeholder={rest.placeholder}
        className="bg-secondary text-black w-full h-12 px-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-bg focus:border-transparent"
      />
    </div>
  );
};

export default InputFelid;
