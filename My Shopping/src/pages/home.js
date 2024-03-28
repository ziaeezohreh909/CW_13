import { Home } from "../componets/home";
import { El } from "../utils/el";

export function HomePage() {
  return El({
    element: "div",
    className: "bg-gray-500",
    children: [Home()],
  });
}
