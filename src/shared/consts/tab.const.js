import ICONS from "./icon.const";
import Explore_Screen from "../../pages/Explore";
import Riwayat_Screen from "../../pages/History";
import Akun_Screen from "../../pages/Account";
import Boarding_Screen from "../../pages/Boarding";
import Login_Screen from "../../pages/Login";
import Booking_Screen from "../../pages/Booking";
import PilihLayanan_Screen from "../../pages/Services";
import BookingCheckout_Screen from "../../pages/Checkout";
import PilihPembayaran_Screen from "../../pages/Payment";
import Liked_Screen from "../../pages/Liked";
import Home_Screen from "../../pages/Home";
import Splash from "../../pages/Splash";

const tab = [
  {
    name: "Home_Screen",
    component: Home_Screen,
    title: "Home",
    showIcon: true,
    iconSource: ICONS.tab_menu_home,
    headerShown: false,
  },
  {
    name: "Explore_Screen",
    component: Explore_Screen,
    title: "Kategori",
    showIcon: true,
    iconSource: ICONS.tab_menu_explore,
    headerShown: false,
  },
  {
    name: "Riwayat_Screen",
    component: Riwayat_Screen,
    title: "Riwayat",
    showIcon: true,
    iconSource: ICONS.tab_menu_riwayat,
    headerShown: false,
  },
  {
    name: "Akun_Screen",
    component: Akun_Screen,
    title: "Akun",
    showIcon: true,
    iconSource: ICONS.tab_menu_akun,
    headerShown: false,
  },
  {
    name: "Boarding_Screen",
    component: Boarding_Screen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "Login_Screen",
    component: Login_Screen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "Splash",
    component: Splash,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "Booking_Screen",
    component: Booking_Screen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "PilihLayanan_Screen",
    component: PilihLayanan_Screen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "BookingCheckout_Screen",
    component: BookingCheckout_Screen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "PilihPembayaran_Screen",
    component: PilihPembayaran_Screen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "Liked_Screen",
    component: Liked_Screen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
];

export default tab;
