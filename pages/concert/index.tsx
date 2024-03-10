import Timetable from "@/components/concert/TimeTable";

export default function ConcertPage() {
  return (
    <>
      <div className=" flex flex-col items-center">
        <div className="bg-[#2B9F70] text-white text-sm py-1.5 px-6 rounded-full shadow-lg mb-4">
          <span>공연 일정</span>
        </div>
      </div>

      <Timetable />
    </>
  );
}
