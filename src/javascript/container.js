let newCustomers = [
  {
    image:
      "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Bale",
    email: "huy.com@gmail.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Bruno",
    email: "huy2.com@gmail.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Kevin",
    email: "huy3.com@gmail.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Tony",
    email: "huy4.com@gmail.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Silva",
    email: "huy5.com@gmail.com",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    name: "Selena",
    email: "huy6.com@gmail.com",
  },
];

let Products = [
  {
    nameProducts: "Macbook Pro M1",
    codeProduct: "Mã SP:123456",
    totalSales: 30,
  },
  {
    nameProducts: "Macbook Air M2",
    codeProduct: "Mã SP:123456",
    totalSales: 30,
  },
  {
    nameProducts: "Macbook Air M1",
    codeProduct: "Mã SP:123456",
    totalSales: 30,
  },
  {
    nameProducts: "Iphone",
    codeProduct: "Mã SP:123456",
    totalSales: 30,
  },
  {
    nameProducts: "AirPod",
    codeProduct: "Mã SP:123456",
    totalSales: 30,
  },
  {
    nameProducts: "JBL Pro",
    codeProduct: "Mã SP:123456",
    totalSales: 30,
  },
];

let productsRecently = [
  {
    name: "Bale",
    time: "Jun 23,2022",
    totalMoney: "2.300.000 VNĐ",
    status: "Hoàn thành",
    class: "success",
  },
  {
    name: "Bruno",
    time: "Jun 23,2022",
    totalMoney: "2.300.000 VNĐ",
    status: "Đã huỷ",
    class: "cancel",
  },
  {
    name: "Kevin",
    time: "Jun 23,2022",
    totalMoney: "2.300.000 VNĐ",
    status: "Đang giao",
    class: "todo",
  },
  {
    name: "Tony",
    time: "Jun 23,2022",
    totalMoney: "2.300.000 VNĐ",
    status: "Đang giao",
    class: "todo",
  },
  {
    name: "Silva",
    time: "Jun 23,2022",
    totalMoney: "2.300.000 VNĐ",
    status: "Hoàn thành",
    class: "success",
  },
  {
    name: "Selena",
    time: "Jun 23,2022",
    totalMoney: "2.300.000 VNĐ",
    status: "Hoàn thành",
    class: "success",
  },
];

let listProducts = [
  {
    name: "Iphone 13",
    type: "Điện thoại",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "20.000.000",
    status: "Còn Hàng",
  },
  {
    name: "PS5",
    type: "Đồ điển tử",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "20.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Iphone 11",
    type: "Điện thoại",
    createDate: "Jun 23,2022",
    amount: "13 cái",
    price: "10.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Ghế công thái học",
    type: "Ghế",
    createDate: "Jun 23,2022",
    amount: "10 cái",
    price: "8.000.000",
    status: "Còn Hàng",
  },
  {
    name: "JBL",
    type: "Loa",
    createDate: "Jun 23,2022",
    amount: "300 cái",
    price: "3.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Sony",
    type: "Tai nghe",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "20.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Bàn phím cơ",
    type: "Bàn phím",
    createDate: "Jun 23,2022",
    amount: "1000 cái",
    price: "1.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Marshall",
    type: "Loa",
    createDate: "Jun 23,2022",
    amount: "0 cái",
    price: "7.000.000",
    status: "Hết Hàng",
  },
  {
    name: "Chuột Logitech G603",
    type: "Chuột",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "1.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Iphone X",
    type: "Điện thoại",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "5.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Sạc Iphone",
    type: "Sạc",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "100.000",
    status: "Còn Hàng",
  },
  {
    name: "Ốp điện thoại",
    type: "Ốp",
    createDate: "Jun 23,2022",
    amount: "80 cái",
    price: "20.000.000",
    status: "Còn Hàng",
  },
  {
    name: "MacBook",
    type: "Máy tính",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "20.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Thinkpad",
    type: "Máy tính",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "20.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Bàn làm việc",
    type: "Bàn",
    createDate: "Jun 23,2022",
    amount: "0 cái",
    price: "4.000.000",
    status: "Hết Hàng",
  },
  {
    name: "Iphone SE",
    type: "Điện thoại",
    createDate: "Jun 23,2022",
    amount: "200 cái",
    price: "3.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Màn Hình Dell",
    type: "Màn hình",
    createDate: "Jun 23,2022",
    amount: "10 cái",
    price: "12.000.000",
    status: "Còn Hàng",
  },
  {
    name: " Mac studio ",
    type: "Máy tinh",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "100.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Studio display",
    type: "Màn hình",
    createDate: "Jun 23,2022",
    amount: "100 cái",
    price: "50.000.000",
    status: "Còn Hàng",
  },
  {
    name: "Magic Mouse",
    type: "Chuột",
    createDate: "Jun 23,2022",
    amount: "30 cái",
    price: "4.000.000",
    status: "Còn Hàng",
  },
];

export { newCustomers, Products, productsRecently, listProducts };
