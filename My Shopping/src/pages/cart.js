import { Cart } from "../componets/cart";
import { El } from "../utils/el";

export function CartPage() {
  return El({
    element: "div",
    className: "bg-gray-600",
    children: [Cart()],
  });
}
