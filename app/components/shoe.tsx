import Image from "next/image";

export default function Shoe() {
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-full">
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