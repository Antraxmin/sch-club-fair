import Image from "next/image";

export default function BoothPage() {
  return (
    <>
      <div className="mt-4 flex flex-col items-center">
        <div className="bg-[#2B9F70] text-white text-sm py-1.5 px-6 rounded-full shadow-lg mb-4">
          <span>동아리 부스 안내</span>
        </div>
        <div className="w-full h-full ">
          <Image
            src={"/img/map.png"}
            layout="responsive"
            width={100}
            height={100}
            alt={""}
          />
        </div>
      </div>
    </>
  );
}
