import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Preview() {
  return (
    <>
      {/* Exterior Image */}
      <Zoom>
        <Image
          src="/slipstream_black.webp"
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className="h-96 w-full rounded-lg object-cover sm:h-[500px]"
        />
      </Zoom>

      {/* Exterior Description */}
      <section className="my-4 pl-2">
        <h3 className="text-2xl font-bold">Metallic Gloss</h3>
        <p>A rich and luxurious interior with a modern and sleek design.</p>
      </section>
      {/* Interior Image */}
      <Zoom>
        <Image
          src="/slipstream_black.webp"
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className="h-96 w-full rounded-lg object-cover sm:h-[500px]"
        />
      </Zoom>
      <section className="mt-4 pl-2">
        <h3 className="text-xl font-bold">Interior Color</h3>
      </section>
    </>
  );
}

export default Preview;
