import { Menu, Stat } from "../assets";

const Panel = () => {
  return (
    <div className="w-full">
      <nav className="flex w-full justify-end p-4 bg-blue-500 text-white">
        <Menu className="text-4xl cursor-pointer" />
      </nav>

      <div className="w-full custom-container grid grid-cols-12 gap-4 mt-8 ">
        {Array(10)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                className="w-full col-span-3 p-4 rounded-lg flex items-center bg-gray-800/30 justify-between shadow-lg gap-4 "
                key={index}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="font-sm text-gray-400">User</h3>
                  <h3 className="font-medium tracking-wide text-lg">5678</h3>
                </div>

                <div className="w-fit bg-blue-500/20 p-4 rounded-full">
                  <Stat className="text-3xl" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Panel;
