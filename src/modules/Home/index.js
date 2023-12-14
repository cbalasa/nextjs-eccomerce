import { getItems } from "@/utils/fetchItems/getItems";
import DisplayProducts from "./DisplayProducts";

async function Home() {
	const products = await getItems({ type: "products" });

	return <DisplayProducts products={products}></DisplayProducts>;
}

export default Home;
