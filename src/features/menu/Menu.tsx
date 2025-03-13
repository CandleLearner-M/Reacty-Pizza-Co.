import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../Services/apiRestaurant";
import MenuItem from "./MenuItem";

export type PizzaItem = {
  id: string;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((item: PizzaItem) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
