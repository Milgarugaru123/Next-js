const Category = ({ position, func, selected }) => {
  return (
    <button
      className={`${selected && `bg-pink-300`} border border-sky-300 px-3 py-1.5 rounded-lg`}
      onClick={func}
    >
      {position}
    </button>
  );
};

export default Category;
