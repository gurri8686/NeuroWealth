// import { Outlet, Link, useLocation } from "react-router-dom";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
// import AudiotrackSharpIcon from "@mui/icons-material/AudiotrackSharp";
// import HomeIcon from "@mui/icons-material/Home";

// const DashboardLayout = () => {
//   const location = useLocation();

//   const isActive = (path:string) => location.pathname.includes(path);

//   return (
//     <div className="flex h-[100vh] flex-col md:flex-row">
//       {/* Sidebar */}
//       <div className="bg-gradient-to-b from-[#493e82] to-[#3d3569] h-full shadow-lg flex flex-col w-full md:w-[350px]">
//         <h3 className="text-[#e2e3f5] font-bold text-2xl uppercase border-b border-[#6668a7] p-6 text-start tracking-wide">
//           NeuroWealth
//         </h3>
//         <ul className="p-6 space-y-3">
//           <li>
//             <Link
//               to="neural-pattern-score"
//               className={`text-[15px] flex-1 items-center py-3 px-4 rounded-lg block transition-all font-medium ${
//                 isActive("neural-pattern-score")
//                   ? "bg-[#32295e] text-white"
//                   : "text-[#e2e3f5] hover:bg-[#32295e]"
//               }`}
//             >
//               <span>
//                 <PsychologyIcon />
//               </span>{" "}
//               Neural Pattern Score
//             </Link>
//           </li>
//           <li className="mb-0">
//             <Link
//               to="wealth-frequency-chart"
//               className={`text-[15px] py-3 px-4 rounded-lg block transition-all font-medium ${
//                 isActive("wealth-frequency-chart")
//                   ? "bg-[#32295e] text-white"
//                   : "text-[#e2e3f5] hover:bg-[#32295e]"
//               }`}
//             >
//               <span>
//                 <BarChartSharpIcon />
//               </span>{" "}
//               Wealth Frequency Chart
//             </Link>
//           </li>
//           <li className="mb-0">
//             <Link
//               to="audio-player"
//               className={`text-[15px] py-3 px-4 rounded-lg block transition-all font-medium ${
//                 isActive("audio-player")
//                   ? "bg-[#32295e] text-white"
//                   : "text-[#e2e3f5] hover:bg-[#32295e]"
//               }`}
//             >
//               <span>
//                 <AudiotrackSharpIcon />
//               </span>{" "}
//               Audio Player
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="bg-[#e7e8f5] w-full relative">
//         <div className="border-b border-[#e9eaff] bg-[#fff] p-6 h-[81px] shadow-md md:absolute md:w-full top-0">
//           <div className="text-end">
//             <Link to="/">
//               <HomeIcon />
//             </Link>
//           </div>
//         </div>

//         <div className="flex items-center justify-center min-h-[100vh]">
//           <Outlet />
//         </div>

//         <div className="text-[#b4b5d0] text-center text-sm p-4 border-t border-[#cccccc] absolute w-full bottom-0 bg-white">
//           &copy; {new Date().getFullYear()} NeuroWealth. All Rights Reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { Outlet, Link, useLocation } from "react-router-dom";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import AudiotrackSharpIcon from "@mui/icons-material/AudiotrackSharp";
import HomeIcon from "@mui/icons-material/Home";

const DashboardLayout = () => {
  const location = useLocation(); // Get the current route

  // Helper function to determine if a link is active
  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <div className="flex lg:h-[100vh] flex-col md:flex-row">
      <div className="bg-gradient-to-b from-[#493e82] to-[#3d3569] h-full shadow-lg flex flex-col w-full md:w-[320px] lg:fixed z-50">
        <h3 className="text-[#e2e3f5] font-bold text-[1rem] xxl:text-[2rem] uppercase border-b border-[#6668a7] p-4 text-start tracking-wide h-[50px]">
          NeuroWealth
        </h3>
        <ul className="p-4 space-y-3">
          <li>
            <Link
              to="neural-pattern-score"
              className={`text-[15px] flex-1 items-center py-3 px-4 rounded-lg block transition-all font-medium ${
                isActive("neural-pattern-score")
                  ? "bg-[#32295e] text-white"
                  : "text-[#e2e3f5] hover:bg-[#32295e]"
              }`}
            >
              <span>
                <PsychologyIcon />
              </span>{" "}
              Neural Pattern Score
            </Link>
          </li>
          <li className="mb-0">
            <Link
              to="wealth-frequency-chart"
              className={`text-[15px] py-3 px-4 rounded-lg block transition-all font-medium ${
                isActive("wealth-frequency-chart")
                  ? "bg-[#32295e] text-white"
                  : "text-[#e2e3f5] hover:bg-[#32295e]"
              }`}
            >
              <span>
                <BarChartSharpIcon />
              </span>{" "}
              Wealth Frequency Chart
            </Link>
          </li>
          <li className="mb-0">
            <Link
              to="audio-player"
              className={`text-[15px] py-3 px-4 rounded-lg block transition-all font-medium ${
                isActive("audio-player")
                  ? "bg-[#32295e] text-white"
                  : "text-[#e2e3f5] hover:bg-[#32295e]"
              }`}
            >
              <span>
                <AudiotrackSharpIcon />
              </span>{" "}
              Audio Player
            </Link>
          </li>
        </ul>
      </div>

      <div className="border-b border-[#e9eaff] bg-[#fff] p-4 h-[50px] shadow-md fixed md:w-full top-0 hidden sm:block">
        <div className="text-end">
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
      </div>
      <div className="bg-[#e7e8f5] w-full md:pl-[350px] md:pt-[100px] 2xl:pt-0 md:pb-[100px] 2xl:pb-0 overflow-y-scroll">
        <div className="flex items-center justify-center min-h-[100vh]">
          <Outlet />
        </div>
      </div>
      <div className="text-[#b4b5d0] text-center text-sm p-4 border-t border-[#cccccc] static sm:fixed  w-full bottom-0 bg-white">
        &copy; {new Date().getFullYear()} NeuroWealth. All Rights Reserved.
      </div>
    </div>
  );
};

export default DashboardLayout;
