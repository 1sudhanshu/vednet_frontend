export interface orderHistoryTableType {
  heading?: string;
  imagePath?: string;
  productTittle?: string;
  orderProcess?: string;
  size?: string;
  color?: string;
  articleNumber?: number;
  Units?: number;
  Price?: string;
  orderProcessClass?: string;
}
export interface orderHistoryTableDataType {
  data: orderHistoryTableType;
}
export const orderHistoryTableData = [
  { heading: "New Orders" },
  {
    imagePath: "product/1.png",
    productTittle: "Long Top",
    orderProcess: "Processing",
    size: "M",
    color: "Lavander",
    articleNumber: 4215738,
    Units: 1,
    Price: "$21",
  },
  {
    imagePath: "product/13.png",
    productTittle: "Fancy watch",
    orderProcess: "Processing",
    size: "35mm",
    color: "Blue",
    articleNumber: 5476182,
    Units: 1,
    Price: "$10",
  },
  {
    imagePath: "product/4.png",
    productTittle: "Man shoes",
    orderProcess: "Processing",
    size: "8",
    color: "Black & white",
    articleNumber: 1756457,
    Units: 1,
    Price: "$18",
  },
  { heading: "Shipped Orders" },
  {
    orderProcessClass: "shipped-order",
    imagePath: "product/10.png",
    productTittle: "Ledis side bag",
    orderProcess: "Shipped",
    size: "22cm x 18cm",
    color: "Brown",
    articleNumber: 7451725,
    Units: 1,
    Price: "$13",
  },
  {
    orderProcessClass: "shipped-order",
    imagePath: "product/12.png",
    productTittle: "Ledis Slipper",
    orderProcess: "Shipped",
    size: "6",
    color: "Brown & white",
    articleNumber: 4127421,
    Units: 1,
    Price: "$6",
  },
  {
    orderProcessClass: "shipped-order",
    imagePath: "product/3.png",
    productTittle: "Fancy ledis Jacket",
    orderProcess: "Shipped",
    size: "Xl",
    color: "Light gray",
    articleNumber: 3581714,
    Units: 1,
    Price: "$24",
  },
  { heading: "Cancelled Orders" },
  {
    orderProcessClass: "cancel-order",
    imagePath: "product/15.png",
    productTittle: "Iphone6 mobile",
    orderProcess: "Cancelled",
    size: "10cm x 15cm",
    color: "Black",
    articleNumber: 5748214,
    Units: 1,
    Price: "$25",
  },
  {
    orderProcessClass: "cancel-order",
    imagePath: "product/14.png",
    productTittle: "Watch",
    orderProcess: "Cancelled",
    size: "27mm",
    color: "Brown",
    articleNumber: 2471254,
    Units: 1,
    Price: "$12",
  },
  {
    orderProcessClass: "cancel-order",
    imagePath: "product/11.png",
    productTittle: "Slipper",
    orderProcess: "Cancelled",
    size: "6",
    color: "Blue",
    articleNumber: 8475112,
    Units: 1,
    Price: "$6",
  },
];

export const cashOnDeliveryFormData = [
  { PlaceHolder: "First Name", formGroupClassName: "p-r-0" },
  { PlaceHolder: "Last Name" },
  { PlaceHolder: "Pincode", formGroupClassName: "p-r-0" },
  { PlaceHolder: "Enter mobile number" },
  { PlaceHolder: "State", formGroupClassName: "p-r-0" },
  { PlaceHolder: "City" },
];
