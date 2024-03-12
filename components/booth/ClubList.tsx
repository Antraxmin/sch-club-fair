import clubs from "../../utils/data/ClubData";

export default function ClubList() {
  return (
    <div className="mt-4">
      <ul className="grid grid-cols-1 gap-4">
        {clubs.map((club, index) => (
          <li key={index} className="m-4">
            <div className="flex items-center">
              <img
                src={club.img}
                alt={""}
                className="w-12 h-12 mr-4 rounded-full"
              />
              <div>
                <h2 className="text-md font-bold">{club.title}</h2>
                {/* <p className="text-xs">{club.content}</p> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
