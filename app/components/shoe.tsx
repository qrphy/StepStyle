import Image from "next/image";

export default function Shoe() {
  return (
    <div className="flex items-center justify-center">
      <main className="relative flex w-full">
        <div className="absolute inset-0 flex pt-20 sm:pt-25 md:pt-30 lg:pt-35 xl:pt-40 justify-center">
          <p className="text-black text-center font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" style={{ fontFamily: "Poppins" }}>Ready for Streets, Ready for You.</p>
        </div>
        <Image
          src="/nike-white-bg.jpg"
          alt="Nike White Background"
          width={2000}
          height={400}
        />
      </main>
    </div>
  );
}