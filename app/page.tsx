import Shoe from "./components/shoe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-[300vh] items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-[300vh] w-full max-w-fit flex-col bg-white dark:bg-black items-center justify-between">
        <Shoe />
        <Footer />
      </main>
    </div>
  );
}
