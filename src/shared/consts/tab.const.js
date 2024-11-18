import ICONS from "./icon.const";
import ExploreScreen from "../../pages/Explore";
import HistoryScreen from "../../pages/History";
import AccountScreen from "../../pages/Account";
import BoardingScreen from "../../pages/Boarding";
import AuthenticationScreen from "../../pages/Login";
import BookingScreen from "../../pages/Booking";
import ServicesScreen from "../../pages/Services";
import CheckoutScreen from "../../pages/Checkout";
import PaymentScreen from "../../pages/Payment";
import FavouriteScreen from "../../pages/Liked";
import HomeScreen from "../../pages/Home";
import SplashScreen from "../../pages/Splash";

const tab = [
  {
    name: "HomeScreen",
    component: HomeScreen,
    title: "Home",
    showIcon: true,
    iconSource: ICONS.tab_menu_home,
    headerShown: false,
  },
  {
    name: "ExploreScreen",
    component: ExploreScreen,
    title: "Kategori",
    showIcon: true,
    iconSource: ICONS.tab_menu_explore,
    headerShown: false,
  },
  {
    name: "HistoryScreen",
    component: HistoryScreen,
    title: "Riwayat",
    showIcon: true,
    iconSource: ICONS.tab_menu_riwayat,
    headerShown: false,
  },
  {
    name: "AccountScreen",
    component: AccountScreen,
    title: "Akun",
    showIcon: true,
    iconSource: ICONS.tab_menu_akun,
    headerShown: false,
  },
  {
    name: "BoardingScreen",
    component: BoardingScreen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "AuthenticationScreen",
    component: AuthenticationScreen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "SplashScreen",
    component: SplashScreen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "BookingScreen",
    component: BookingScreen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "ServicesScreen",
    component: ServicesScreen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "CheckoutScreen",
    component: CheckoutScreen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "PaymentScreen",
    component: PaymentScreen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
  {
    name: "FavouriteScreen",
    component: FavouriteScreen,
    title: "",
    headerShown: false,
    headerTransparent: true,
    hideTabBar: true,
  },
];

export default tab;
