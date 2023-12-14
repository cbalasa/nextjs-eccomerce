import Image from "next/image";
import React from "react";

function Hero() {
	return (
		<div className="flex h-[60vh] bg-blue-gray rounded-lg mt-4 overflow-hidden relative pl-8 gap-8">
			<div className="flex flex-col justify-center flex-1 items-center ">
				<h1 className="md:text-2xl text-lg uppercase font-bold text-center">
					Winter collection
				</h1>
				<span>Get in style</span>
			</div>
			<div className="flex md:w-8/12 w-6/12 relative">
				<Image
					src="https://voxo-next-reactpixelstrap.vercel.app/assets/images/fashion/slider/1.jpg"
					alt="hero"
					fill={true}
					style={{ objectFit: "cover" }}
					className="bg-right"
				/>
			</div>
		</div>
	);
}

export default Hero;
