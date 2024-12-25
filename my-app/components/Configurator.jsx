import Image from "next/image";

function Configurator() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">Fisker Ocean</h1>
      <p>
        Configure your very own, with the option to choose from 6 exterior, 2
        interior and 3 wheel options.
      </p>

      {/* Exterior Color */}
      <div>
        <h3>Exterior Color</h3>

        <div className="flex gap-1">
          {new Array(6).fill(0).map(
            (
              _,
              i, // 6 colors
            ) => (
              <button
                key={i}
                className={`${i === 0 && "ring"} rounded-full ring-blue-300 duration-100 hover:scale-110`}
                onClick={() => console.log(i + 1)}
              >
                <Image
                  src="/sun_soaked.webp"
                  alt="Color"
                  width={50}
                  height={50}
                />
              </button>
            ),
          )}
        </div>
      </div>
      {/* Wheel Color */}
      {/* Interior Color */}
    </>
  );
}

export default Configurator;
