import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  Home,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: Home },
  { to: "/ai/write-article", label: "Write Articles ", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ Sidebar: isSidebarOpen, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-400 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        isSidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="my-7 w-full ">
        <img
          src={user.imageUrl}
          alt="user_avatar"
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="mt-1 text-center font-medium text-xl text-gray-700">
          {user.fullName}
        </h1>
        <div className="mt-5 px-6 text-sm text-gray-600 font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#8376bd] to-[#64388d] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-gray-600"
                    }`}
                  />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          className="flex gap-2 items-center"
        >
          <img src={user.imageUrl} className="w-8 rounded-full cursor-pointer"  onClick={openUserProfile}/>
          <div className="flex flex-col">
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            <p className="text-xs text-gray-500">
              <Protect plan="premium" fallback="free">
                Premium
              </Protect>{" "}
              Plan
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-7 cursor-pointer text-gray-400 hover:text-gray-700 transition"
        />
      </div>
    </div>
  );
};

export default Sidebar;
