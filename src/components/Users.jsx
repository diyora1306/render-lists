import React from "react";
const users = [
  {
    id: 1,
    name: "Farrux Mengboyev",
    role: "Frontend Developer",
    avatar: "👨🏻‍🎨",
  },
  {
    id: 2,
    name: "Nizomiddin Rahimberdiyev",
    role: "Web Design",
    avatar: "👨🏻‍🎨",
  },
  {
    id: 3,
    name: "Ilyosbek",
    role: "Web Developer",
    avatar: "👨🏽‍💻",
  },
  {
    id: 4,
    name: "Murodbek Fayzikhanov",
    role: "Backend Developer",
    avatar: "👨🏾‍💻",
  },
  {
    id: 5,
    name: "Mirfazil Mirsharipov",
    role: "Frontend Developer",
    avatar: "👨🏽‍🎨",
  },
  {
    id: 6,
    name: "Temur Alixanov",
    role: "Blogger",
    avatar: "👨🏾",
  },
  {
    id: 7,
    name: "dili.me",
    role: "Blogger",
    avatar: "🧑🏽‍💻",
  },
  {
    id: 8,
    name: "Aslamboy",
    role: "PUBG",
    avatar: "👦🏽",
  },
  {
    id: 9,
    name: "Omonxon",
    role: "Blogger",
    avatar: "🧑🏽",
  },
  {
    id: 10,
    name: "Isomtv",
    role: "YouTuber",
    avatar: "👦🏻",
  },
];

const UserCard = ({ user }) => {
  return (
    <div className="flex bg-[#F2F2F2F2] items-center space-x-4  rounded-2xl  w-[500px] shadow-[10px_5px_5px_gray] p-5 ">
      <span className="text-[50px]">{user.avatar}</span>
      <div>
        <h3 className="font-semibold text-lg">{user.name}</h3>
        <p className="text-gray-500 text-sm">{user.role}</p>
      </div>
    </div>
  );
};

const UserList = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-4xl font-bold mb-9 ml-[20px] ">Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
