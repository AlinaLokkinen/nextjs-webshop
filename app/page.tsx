import Image from "next/image";
import ViewProductsButton from "./components/ViewProductsButton";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Image
        src="/webshop.jpg"
        alt="a web shop"
        fill
        className="object-cover absolute top-0 left-0 h-screen z-0"
      />

      <div className="relative z-10 text-cyan-900 p-10 h-50">
        <h1 className="text-5xl">A Web shop</h1>
        <p className="mt-5">A pretend web shop to practice Next.js with</p>
        <p>
          Peek at my{" "}
          <a className="underline" href="https://github.com/alinaLokkinen/">
            Github
          </a>
        </p>
      </div>
      <div className="relative z-10 p-4 bg-cyan-900 text-white w-1/7 text-center self-center font-medium text-lg rounded-xs">
        <Link href="/shop">View products</Link>
      </div>
    </div>
  );
};

export default Home;
