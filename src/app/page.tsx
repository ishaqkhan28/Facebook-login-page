import Image from "next/image";
import Link from "next/link"
import img from "./images/4lCu2zih0ca.svg"
export default function App() {
  return (
    <main>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="text-3xl w-1/2 px-10">
          <Image src={img} alt="facebook logo" width={300} height={100}/>
          <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life.</p>
          </div>
        <div className="bg-white flex flex-col p-5 rounded-xl w-1/3 relative">
          <input className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600" type="text" placeholder="email address or phone number"/>
          <input className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600" type="password" placeholder="Password" />
          <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700"><Link href={"login"}>Log in</Link></button>
          <span className="cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline ">Forgotten password?</span>
          <span className="my-2">
            <hr />
          </span>
          <button className=" bg-green-500 my-2 py-2 px-2 text-lg font-bold text-white rounded-md hover:bg-green-600 w-fit mx-auto">Create new account</button>
          <span className="absolute -bottom-12 my-2 mx-10 text-sm"><Link href={"/"}className="font-bold hover: underline cursor-pointer">Create a Page </Link>  for a celebrity, brand or business.</span>
        </div>
      </div>
    </main>
  );
}
