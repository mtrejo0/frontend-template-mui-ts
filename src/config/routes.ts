import Account from "../screens/Account";
import ErrorPage from "../screens/ErrorPage";
import Home from "../screens/Home";
import Login from "../screens/Login";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen",
    protected: true,
  },
  {
    path: "/account",
    component: Account,
    name: "Account Screen",
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login Screen",
    protected: false,
  },
  {
    path: "*",
    component: ErrorPage,
    name: "Error Screen",
    protected: false,
  },
];

export default routes;
