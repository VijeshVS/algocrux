import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<div className="flex justify-between bg-black shadow-sm shadow-gray-900 h-[7vh]">
				<div className="font-mono text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 py-2 px-4">
          algoCRUX
        </div>
        <div className="flex flex-row space-x-6 font-mono px-4 items-center">
          <Link href={'/'} className="px-2 py-1 rounded-lg hover:scale-x-110 duration-300">Tutorials</Link>
          <Link href={'/'} className="px-2 py-1 rounded-lg hover:scale-x-110 duration-300">Contest</Link>
          <Link href={'/'} className="bg-gradient-to-br from-white to-white hover:from-yellow-300 hover:to-orange-400 duration-300 text-black px-2 py-1 rounded-md font-bold">Login</Link>
        </div>
			</div>
		</>
	);
};

export default Navbar;
