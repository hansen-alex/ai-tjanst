import "./guitar-gear.scss";

const GuitarGear = (props: {
  item: string;
  description: string;
  imagePath: string;
}) => {
  const formattedId = props.item
    .toLowerCase()
    .replace(/[\s/]/g, "-")
    .replace(/[()]/g, "");

  return (
    <div
      id={formattedId}
      className={
        window.location.hash == `#${formattedId}`
          ? "guitar-gear highlight"
          : "guitar-gear"
      }
    >
      <h2>{props.item}</h2>
      <img
        src={props.imagePath || "/musicoach.png"}
        alt={`Example of ${props.item}`}
      />
      <p>{props.description}</p>
    </div>
  );
};

export default GuitarGear;
