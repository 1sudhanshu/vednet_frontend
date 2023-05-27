import { Database, MessageCircle, ShoppingBag, UserPlus } from "react-feather";
import { Earnings, Messages, NewUser, Products } from "../../../Constant";

export let TopWidgetsdatas = [
  {
    CardBodyClass: "bg-primary",
    icon: <Database />,
    tittle: Earnings,
    amount: 6659,
    iconClass: <Database className="icon-bg" />,
  },
  {
    CardBodyClass: "bg-secondary",
    icon: <ShoppingBag />,
    tittle: Products,
    amount: 9856,
    iconClass: <ShoppingBag className="icon-bg" />,
  },
  {
    CardBodyClass: "bg-primary",
    icon: <MessageCircle />,
    tittle: Messages,
    amount: 893,
    iconClass: <MessageCircle className="icon-bg" />,
  },
  {
    CardBodyClass: "bg-primary",
    icon: <UserPlus />,
    tittle: NewUser,
    amount: 45631,
    iconClass: <UserPlus className="icon-bg" />,
  },
];
