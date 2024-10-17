import {
  GridViewOutlined,
  SupportAgentOutlined,
  AccountBalanceWalletOutlined,
  AccountBoxOutlined,
} from "@mui/icons-material";

import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PaymentsIcon from '@mui/icons-material/Payments';
import DescriptionIcon from '@mui/icons-material/Description';
import TaskIcon from '@mui/icons-material/Task';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
//import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SettingsIcon from '@mui/icons-material/Settings';

export default [
  {
    id: "dashboard",
    label: "Dashboard",
    to: "/console/dashboard",
    icon: GridViewOutlined,
  },
  {
    id: "agents",
    label: "Chat Agents",
    to: "/console/agents",
    icon: SupportAgentOutlined,
  },
  {
    id: "accounts",
    label: "Account",
    to: "/console/accounts",
    icon: AccountBalanceWalletOutlined,
  },
  {
    id: "leadgeneration",
    label: "Lead Generation",
    to:"/console/leadgeneration",
    icon: LeaderboardIcon,
  },
  {
    id: "marketing",
    label: "Marketing",
    to: "/console/marketing",
    icon: AddBusinessIcon,
  },
  {
    id: "payment",
    label: "Payment and Subscription",
    to: "/console/payment",
    icon: PaymentsIcon,
  },
  {
    id: "report",
    label: "Report",
    to: "/console/report",
    icon: DescriptionIcon,
  },
  {
    id: "task",
    label: "Task and Remainder",
    to: "/console/task",
    icon: TaskIcon,
  },
  {
    id: "sales",
    label: "Sales",
    to: "/console/sales",
    icon: TrendingUpIcon,
  },
  {
    id: "help",
    label: "Help and Support",
    to: "/console/help",
    icon: HelpCenterIcon,
  },
  {
    id: "settings",
    label: "Account Settings",
    to: "/console/settings",
    icon: SettingsIcon,
  },

  {
    id: "profile",
    label: "Profile",
    to: "/console/profile",
    icon: AccountBoxOutlined,
  } 
  
];





// export default [
//   {
//     id: "2",
//     label: "Main Menu 2",
//     submenu: [
//       {
//         id: "2.1",
//         label: "Submenu 2.1",
//         to: "/console/inbox",
//       },
//       {
//         id: "2.2",
//         label: "Submenu 2.2",
//         to: "/console/inbox",
//       },
//       {
//         id: "2.3",
//         label: "Submenu 2.3",
//         to: "/console/inbox",
//       },
//     ],
//   },
//   {
//     id: "3",
//     label: "Main menu 3",
//     submenu: [
//       {
//         id: "3.1",
//         label: "Submenu 3.1",
//         to: "/console/inbox",
//       },
//       {
//         id: "3.2",
//         label: "Submenu 3.2",
//         to: "/console/inbox",
//       },
//     ],
//   },
// ];
