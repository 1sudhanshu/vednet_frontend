import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import {  MoreVertical } from "react-feather";
import { Href } from "../../../Constant";

export const OrderHistoryTableData = [
  {
    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/1.png")}
        alt="#"
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Long Top</a>
        <div className="order-process">
        <div className="order-process"><span className="order-process-circle"></span>Processing</div>
        </div>
      </div>
    ),
    Size: "M",
    Color: "Lavander",
    ArticleNumber: 4215738,
    Units: 1,
    Price: "$14",
    icon: <MoreVertical />,
  },
  {

    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/13.png")}
        alt="#"
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Fancy watch</a>
        <div className="order-process"><span className="order-process-circle"></span>Processing</div>
      </div>
    ),
    Size: "35mm",
    Color: "Blue",
    ArticleNumber: 5476182,
    Units: 1,
    Price: "$10",
    icon: <MoreVertical />,
  },
  {

    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/4.png")}
        alt="#"
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Man Shoes</a>
        <div className="order-process"><span className="order-process-circle"></span>Processing</div>
      </div>
    ),
    Size: "8",
    Color: "Black & White",
    ArticleNumber: 1756457,
    Units: 1, 
    Price: "$18",
    icon: <MoreVertical />,
  },

  {
    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/10.png")}
        alt="#"
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Ledis side bag</a>
        <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
      </div>
    ),
    Size: "22cm x 18cm",
    Color: "Brown",
    ArticleNumber: 7451725,
    Units: 1,
    Price: "$13",
    icon: <MoreVertical />,
  },

  {
    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/12.png")}
        alt="#"   
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Ledis Slipper</a>
        <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
      </div>
    ),
    Size: "6",
    Color: "Brown & white",
    ArticleNumber: 4127421,
    Units: 1,
    Price: "$6",
    icon: <MoreVertical />,
  },
  {
    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/3.png")}
        alt="#"
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Fancy ledis Jacket</a>
        <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
      </div>
    ),
    Size: "XL",
    Color: "Light gray",
    ArticleNumber: 3581714,
    Units: 1,
    Price: "$24",
    icon: <MoreVertical />,
  },
  {
    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/2.png")}
        alt="#"
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Ledis Handbag</a>
        <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
      </div>
    ),
    Size: "25cm x 20cm",
    Color: "Black",
    ArticleNumber: 6748142,
    Units: 1,
    Price: "$14",
    icon: <MoreVertical />,
  },
  {
    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/15.png")}
        alt="#"
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Iphone6 mobile</a>
        <div className="order-process">
          <span className="order-process-circle cancel-order"></span> Cancelled
        </div>
      </div>
    ),
    Size: "10cm x 15cm",
    Color: "Black",
    ArticleNumber: 5748214,
    Units: 1,
    Price: "$25",
    icon: <MoreVertical />,
  },
  {
    Image: (
      <Image
        className="img-fluid img-50"
        src={dynamicImage("product/14.png")}
        alt="#"
      />
    ),
    productName: (
      <div className="product-name">
        <a href={Href}>Watch</a>
        <div className="order-process"><span className="order-process-circle cancel-order"></span>Cancelled</div>
      </div>
    ),
    Size: "27mm",
    Color: "Brown",
    ArticleNumber: 2471254,
    Units: 1,
    Price: "$12",
    icon: <MoreVertical />,
  },
];

interface OrderHistoryTableColumns {
  Image: JSX.Element;
  productName:any;
  Size: String;
  Color: String;
  ArticleNumber: number;
  Units: number;
  Price: string;
  icon: any;
}
export const OrderHistoryTableColumnsData = [
  {
    name: "Image",
    selector: (data: OrderHistoryTableColumns) => data["Image"],
    sortable: true,
    center: true,
  },
  {
    name: "productName",
    selector: (Row: OrderHistoryTableColumns) => Row["productName"],
    sortable: true,
    center: true,
  },
  {
    name: "Size",
    selector: (Row: OrderHistoryTableColumns) => Row["Size"],
    sortable: true,
    center: true,
  },
  {
    name: "Color",
    selector: (Row: OrderHistoryTableColumns) => Row["Color"],
    sortable: true,
    center: true,
  },
  {
    name: "Article number",
    selector: (Row: OrderHistoryTableColumns) => Row["ArticleNumber"],
    sortable: true,
    center: true,
  },
  {
    name: "Units",
    selector: (Row: OrderHistoryTableColumns) => Row["Units"],
    sortable: true,
    center: true,
  },
  {
    name: "Price",
    selector: (Row: OrderHistoryTableColumns) => Row["Price"],
    sortable: true,
    center: true,
  },
  {
    name: <MoreVertical/>,
    selector: (Row: OrderHistoryTableColumns) => Row["icon"],
    sortable: true,
    center: true,
  },
];
