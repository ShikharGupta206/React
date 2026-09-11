import Item from "./item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item fooditem={item} key={item} />
      ))}
    </ul>
  );
};

export default FoodItems;