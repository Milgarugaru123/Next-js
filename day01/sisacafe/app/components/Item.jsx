const Item = (props) => {
  return (
    <article>
      <img src={props.image} alt="img" className={`w-50 h-50 object-contain`} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </article>
  );
};

export default Item;
