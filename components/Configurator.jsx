import Image from "next/image";
import { exteriorSwatch, interiorSwatch, wheelSwatch } from "@/lib/swatch";

function Configurator() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">Fisker Ocean</h1>
      <p>
        Configure your very own, with the option to choose from 6 exterior, 2
        interior and 3 wheel options.
      </p>

      {/* Exterior Color */}
      <div className="my-4">
        <h3 className="mb-2 text-lg font-bold">Exterior Color</h3>

        <div className="flex flex-wrap gap-2">
          {exteriorSwatch.map((swatch) => (
            <button
              key={swatch.id}
              className={`${swatch.id === 1 && "ring"} rounded-full ring-blue-300 duration-100 hover:scale-105`}
              onClick={() => console.log(i + 1)}
            >
              <Image
                src={swatch.src}
                alt="Color"
                width={0}
                height={0}
                sizes="100%"
                className="w-11"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Wheel Color */}
      <div className="my-4">
        <h3 className="mb-2 text-lg font-bold">Wheel Options</h3>

        <div className="flex gap-2">
          {interiorSwatch.map((swatch) => (
            <button
              key={swatch.id}
              className={`${swatch.id === 0 && "ring"} rounded-full ring-blue-300 duration-100 hover:scale-105`}
              onClick={() => console.log(swatch.id + 1)}
            >
              <Image
                src={swatch.src}
                alt="Color"
                width={0}
                height={0}
                sizes="100%"
                className="w-14"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Interior Color */}
      <div className="my-4">
        <h3 className="mb-2 text-lg font-bold">Interior Color</h3>

        <div className="flex gap-2">
          {wheelSwatch.map((swatch) => (
            <button
              key={swatch.id}
              className={`${swatch.id === 0 && "ring"} ring-blue-300 duration-100 hover:scale-105`}
              onClick={() => console.log(swatch.id + 1)}
            >
              <Image
                src={swatch.src}
                alt="Color"
                width={0}
                height={0}
                sizes="100%"
                className="w-14"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Configurator;
