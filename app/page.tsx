import Image from "next/image";
import img from "@/public/lake.jpg"

export default function Home() {
    return (
        <main className="mt-5">
            <h1 className="text-3xl">This is Home Page! 🏡</h1>
            <p className="mt-8">Next JS use <span className="text-blue-400 font-bold">image optimization</span> technique by default in Image component</p>
            <div className="py-4 w-[500px]">
                <Image placeholder="blur" src={img} alt="Nature Image" className=" rounded-md" quality={80  }/>
            </div>
        </main>
    );
}
