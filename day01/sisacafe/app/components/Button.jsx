const Button = ({ btn, func }) => {
  return (
    <>
      <button className={`w-fit border px-2 py-0.5`} onClick={func}>
        {btn}
      </button>
    </>
  );
};

export default Button;
