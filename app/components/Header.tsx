export default function Header() {
  return (
    <div className="w-full py-6 px-4 bg-white text-black dark:text-white dark:bg-black text-4xl font-medium border-b border-zinc-800">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
            <h1 className="text-left text-3xl font-normal">StepStyle - Premium Footwear</h1>
            <nav className="space-x-5 text-lg font-normal">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Collection</a>
                <a href="#" className="hover:underline">New Arrivals</a>
            </nav>
        </div>
    </div>
  );
}