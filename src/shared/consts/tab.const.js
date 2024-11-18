import ICONS from "../consts/icon_library";
import Explore_Screen from "../../pages/Explore/Explore_Screen";
import Riwayat_Screen from "../../pages/Riwayat/Riwayat_Screen";
import Akun_Screen from "../../pages/Akun/Akun_Screen";
import Boarding_Screen from "../../pages/Boarding/Boarding_Screen";
import Login_Screen from "../../pages/Login/Login_Screen";
import Booking_Screen from "../../pages/Booking/Booking_Screen";
import PilihLayanan_Screen from "../../pages/PilihLayanan/PilihLayanan_Screen";
import BookingCheckout_Screen from "../../pages/BookingCheckout/BookingCheckout_Screen";
import PilihPembayaran_Screen from "../../pages/PilihPembayaran/PilihPembayaran_Screen";
import Liked_Screen from "../../pages/Liked/Liked_Screen";
import Home_Screen from "../../pages/Home/Home_Screen";
import Splash from "../../pages/Splash/Splash_Screen";

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
