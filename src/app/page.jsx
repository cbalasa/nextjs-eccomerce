import DisplayProducts from "@/modules/Home/DisplayProducts";
import { getItems } from "@/utils/fetchItems/getItems";

async function Home() {
	const products = await getItems({ type: "products" });

	return <DisplayProducts products={products}></DisplayProducts>;
}

export default Home;
