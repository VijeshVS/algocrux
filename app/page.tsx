import Link from "next/link";

export default function Home() {
  const tut = [
    {
      id: 1,
      topic: 'Dynamic Programming',
      author: 'vijeshvs',
      date: '26th September, 2024'
    },
    {
      id: 2,
      topic: 'Recursion',
      author: 'samkitsamsukha',
      date: '6th August, 2024'
    },
    {
      id: 3,
      topic: 'Binary Search Trees',
      author: 'vijeshvs',
      date: '22nd July, 2024'
    },
  ];
  return (
    <div className="h-[86vh] flex flex-row w-screen">
      <div className="w-1/4 p-2 shadow-md shadow-gray-800">
        <div className="flex flex-col space-y-2 justify-center items-center my-4 mx-4">
          <button className="w-2/5 px-2 py-1 bg-gray-100 text-black font-semibold rounded-md my-4">Join contest</button>
          <button className="w-2/5 px-2 py-1 bg-gray-100 text-black font-semibold rounded-md my-4">Create contest</button>
        </div>
        <hr className="h-px my-8 bg-gray-800 border-0 "/>
        <div className="my-4 mx-4 flex flex-col space-y-4">
          <h1 className="text-xl font-semibold text-yellow-300">Suggested Tutorials</h1>
          {
            tut.map(({id, topic, author, date})=>(
              <div key={id} className="bg-indigo-950 px-2 py-1 rounded-md">
                <Link className="text-gray-100 font-semibold" href={'/'}>{topic} - <span className="font-normal italic text-yellow-300">@{author}</span></Link>
                <p className="italic text-sm text-gray-400">{date}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-3/4 shadow-md shadow-gray-800"></div>
    </div>
  );
}
