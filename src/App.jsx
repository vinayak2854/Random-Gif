import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col bg-background items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-10 px-4 py-2 text-2xl sm:text-4xl font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
