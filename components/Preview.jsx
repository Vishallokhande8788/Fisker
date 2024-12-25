import Image from "next/image";

function Preview() {
  return (
    <>
      {/* Exterior Image */}
      <Image
        src="/slipstream_black.webp"
        alt=""
        width={0}
        height={0}
        sizes="100%"
        className="h-96 w-full rounded-lg object-cover sm:h-[500px]"
      />

      {/* Exterior Description */}
      <section className="my-4 pl-2">
        <h3 className="text-2xl font-bold">Metallic Gloss</h3>
        <p>A rich and luxurious interior with a modern and sleek design.</p>
      </section>
      {/* Interior Image */}
      <Image
        src="/slipstream_black.webp"
        alt=""
        width={0}
        height={0}
        sizes="100%"
        className="h-96 w-full rounded-lg object-cover sm:h-[500px]"
      />
    </>
  );
}

export default Preview;
