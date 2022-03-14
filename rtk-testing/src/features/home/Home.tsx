import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers, selectHomeStatus, selectUsers } from "./HomeSlice";

export default function Home() {
  const users = useAppSelector(selectUsers);
  console.log("users", users);
  const status = useAppSelector(selectHomeStatus);
  const dispatch = useAppDispatch();
  // request users from server
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="py-10 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <div className="relative">
              <input
                type="text"
                className="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md"
                placeholder="Search..."
              />
              <i className="fa fa-search absolute right-3 top-4 text-gray-300" />
            </div>
            <ul>
              {users.map((user) => (
                <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                  <div className="flex ml-2">
                    <img
                      src={user.picture.large}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt="Avatar"
                    />
                    <div className="flex flex-col ml-2">
                      <span className="font-medium text-black">
                        {user.name.first}
                      </span>
                      <span className="text-sm text-gray-400 truncate w-32">
                        {user.nat}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-300">11:26</span>
                    <i className="fa fa-star text-green-400" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
