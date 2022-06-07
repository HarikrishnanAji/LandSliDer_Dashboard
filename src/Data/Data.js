// Sidebar imports
import {
  UilEstate,
  UilCloudShowersAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilSetting,
  UilPlay,
} from "@iconscout/react-unicons";
import { Chart } from "../components/Chart";



// Analytics Cards imports
import { UilRainbow, UilRaindrops  } from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
 
  {
    icon: UilChart,
    heading: 'Analytics'
  },
    
  {
    icon: UilSetting,
    heading: 'Settings'
  },
  // {
  //   icon: UilPlay,
  //   heading: 'Start',
    
  // },
];

// Analytics Cards Data



export const cardsData = [
  
  {
    title: "Vibration",
    color: {
      backGround: "linear-gradient(180deg, #822eff 0%, #b13dff 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 40,
    value: "",
    png: UilRainbow ,
    series: [
      {
        name: "Vibration",
        data: [31, 40, 28, 21, 42, 10, 34],
      },
    ],
  },
  {
    title: "Moisture",
    color: {
      backGround: "linear-gradient(180deg, #822eff 0%, #b13dff 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 50,
    value: "",
    png: UilRaindrops ,
    series: [
      {
        name: "Moisture",
        data: [10, 20, 20, 30, 50, 30, 40],
      },
    ],
  },
  
  {
    title: "Rainfall",
    color: {
      backGround:
        "linear-gradient(180deg, #822eff 0%, #b13dff 100%",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 30,
    value: "",
    png: UilCloudShowersAlt,
    series: [
      {
        name: "Rainfall",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
