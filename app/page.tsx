import Link from "next/link";
import Image from "next/image";
import crown from "./assets/crown.png";
import { GoStarFill } from "react-icons/go";

export default function Home() {
	const tut = [
		{
			id: 1,
			topic: "Dynamic Programming",
			author: "vijeshvs",
			date: "26th September, 2024",
		},
		{
			id: 2,
			topic: "Recursion",
			author: "samkitsamsukha",
			date: "6th August, 2024",
		},
		{
			id: 3,
			topic: "Binary Search Trees",
			author: "vijeshvs",
			date: "22nd July, 2024",
		},
	];
	const lb = [
		{
			id: 1,
			username: "varenya375",
			rank: "0",
			rating: "1900",
		},
		{
			id: 2,
			username: "vijeshvs",
			rank: "0",
			rating: "1800",
		},
		{
			id: 2,
			username: "samkit",
			rank: "0",
			rating: "1700",
		},
		{
			id: 4,
			username: "oojamchaudhary",
			rank: "0",
			rating: "1600",
		},
		{
			id: 5,
			username: "kiero",
			rank: "0",
			rating: "1500",
		},
	];
	function sortByRating() {
		// Sort by rating in descending order
		lb.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));

		// Assign rank after sorting
		let currentRank = 1;
		lb.forEach((item, index) => {
			// Assign rank to the first item or to items with the same rating
			if (index > 0 && lb[index].rating === lb[index - 1].rating) {
				item.rank = lb[index - 1].rank; // Assign same rank for equal ratings
			} else {
				item.rank = currentRank.toString(); // Otherwise, assign new rank
			}
			currentRank++;
		});
	}
	sortByRating();
	return (
		<div className="h-[86vh] flex flex-col lg:flex-row">
			<div className="lg:w-1/4 p-2 border-[1px] border-gray-800">
				<div className="flex flex-col justify-center items-center my-4 mx-4">
					<button className="w-2/5 hover:scale-105 transition-all ease-in-out delay-50 py-1 bg-gray-100 text-black font-semibold rounded-md my-4">
						Join contest
					</button>
					<button className="w-2/5 hover:scale-105 transition-all ease-in-out delay-50 py-1 bg-gray-100 text-black font-semibold rounded-md my-4">
						Create contest
					</button>
				</div>
				<hr className="h-px my-8 bg-gray-800 border-0 " />
				<div className="my-4 mx-4 flex flex-col space-y-5">
					<h1 className="text-2xl font-semibold text-yellow-300">
						Suggested Tutorials
					</h1>
					{tut.map(({ id, topic, author, date }) => (
						<div
							key={id}
							className="bg-indigo-950 px-2 cursor-pointer hover:scale-105 transition-all delay-75 py-1 rounded-md"
						>
							<Link className="text-gray-100 font-semibold" href={"/"}>
								{topic} -{" "}
								<span className="font-normal italic text-yellow-300">
									@{author}
								</span>
							</Link>
							<p className="italic text-sm text-gray-400">{date}</p>
						</div>
					))}
				</div>
			</div>
			<div className="w-full lg:w-1/2 border-[1px] border-gray-800"></div>
			<div className="w-full lg:w-1/4 border-[1px] border-gray-800 flex flex-col p-6">
				<div className="flex justify-center items-center">
					<Image src={crown} width={36} height={36} alt="crown" />
				</div>
				<div className="text-yellow-400 font-bold text-2xl flex justify-center items-center">
					Leaderboard
				</div>
				<div className="flex flex-row justify-around py-4">
					<p className="w-1/4 font-semibold flex justify-center">Rank</p>
					<p className="w-1/2 font-semibold">Username</p>
					<p className="w-1/4 font-semibold flex justify-center">Rating</p>
				</div>
				{lb.map(({ id, username, rating, rank }) => {
					return (
						<div key={id} className="flex flex-row">
							{rank === "1" ? (
          <p className="w-1/4 font-semibold text-[#FFD700] flex items-center justify-center">
            <GoStarFill /> {/* Gold star for rank 1 */}
          </p>
        ) : rank === "2" ? (
          <p className="w-1/4 font-semibold text-[#C0C0C0] flex items-center justify-center">
            <GoStarFill />
          </p>
        ) : rank === "3" ? (
          <p className="w-1/4 font-semibold text-[#CD7F32] flex justify-center items-center">
            <GoStarFill />
          </p>
        ) : (
          <p className="w-1/4 font-semibold flex justify-center">
            {rank} {/* Default text for other ranks */}
          </p>
        )}
							<p className="w-1/2 font-semibold">{username}</p>
							<p className="w-1/4 font-semibold flex justify-center">
								{rating}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
