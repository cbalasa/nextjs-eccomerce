import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "@/lib/store/providers";
import Header from "@/components/Header/Header";
import CartModal from "@/components/Cart/CartModal";

export default function RootLayout({ children }) {
	return (
		<Providers>
			<html lang="en">
				<body className={`${inter.className} container m-auto`}>
					<Header />
					<CartModal />
					{children}
				</body>
			</html>
		</Providers>
	);
}
