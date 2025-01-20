import { createBrowserRouter } from "react-router-dom";

interface menuType {
  title: string;
  link?: string;
  subMenu?: { subTitle: string; link: string }[];
}
import App from "@/App";
import AppLayout from "@/layouts/AppLayout";
import AdminLayout from "@/layouts/AdminLayout";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import SubMenuHandler from "@/components/common/customUI/Menu/SubMenu"; // Composant pour gérer les sous-menus dynamiques
import NotFoundPage from "@/error/404";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ArticlesHandler from "@/pages/ArticlesDetails"; 
import ArticlePage from "@/pages/Articles"
import Products from "@/pages/Product";      
import Admin from "@/components/admin/Admin";

export const menuItems: menuType[] = [
  { title: "Accueil", link: "/" },
  { title: "A propos", link: "/about" },
  { title: "Contact", link: "/contact" },
  {
    title: "Articles ",
    subMenu: [
      { subTitle: "Blogs", link: "/blogs" },
      { subTitle: "Produits", link: "/products" },
    ],
  },
  {
    title: "Formations",
    subMenu: [
      { subTitle: "Cybersecurity", link: "formations/cybersecurity" },
      { subTitle: "Hacking", link: "formations/hacking" },
      { subTitle: "Data", link: "formations/data" },
      { subTitle: "Webdev", link: "formations/webdev" },
    ],
  },
];

// Générer dynamiquement les routes à partir de menuItems
const generateDynamicRoutes = (menu: menuType[]) => {
  return menu.flatMap((item) => {
    if (item.subMenu) {
      // Crée des routes pour les sous-menus
      return item.subMenu.map((subItem) => ({
        path: subItem.link,
        element: (
          <SubMenuHandler
          />
        ),
      }));
    } else {
      // Route pour les liens directs sans sous-menus
      return {
        path: item.link,
        element:
          item.link === "/about" ? (
            <About />
          ) : item.link === "/contact" ? (
            <Contact />
          ) : (
            <App />
          ),
      };
    }
  });
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/blogs/:id",
        element: <ArticlesHandler />,
      },
      {
        path: "/blogs",
        element: <ArticlePage />,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      ...generateDynamicRoutes(menuItems),
    ],
  },
  {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "",
          element: <Admin />,
        }
      ],
    }
]);
