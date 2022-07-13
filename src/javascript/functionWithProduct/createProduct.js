import { listProducts } from "../container";

let buttonSave = document.getElementById("save_Create_Account");
buttonSave.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name_Create_Product").value;
  let type = document.getElementById("type_Create_Product").value;
  let createDate = document.getElementById("birthdaytime").value;
  let Day = new Date(createDate).getDate();
  let Year = new Date(createDate).getFullYear();
  let Month = new Date(createDate).toLocaleString("default", {
    month: "long",
  });
  let OurNewDateFormat = `${Month} ${Day},${Year}`;
  let amount = document.getElementById("amount_Create_Product").value;
  let convertAmount = parseInt(amount);
  let price = document.getElementById("price_Create_Product").value;
  let status = document.getElementById("status_Create_Product").value;

  let classOfProduct;
  if (amount > 0) {
    classOfProduct = "success";
  } else {
    classOfProduct = "cancel";
  }

  const newProduct = {
    name: name,
    type: type,
    createDate: OurNewDateFormat,
    amount: convertAmount,
    price: price,
    status: status,
    class: classOfProduct,
  };
  let oldData = JSON.parse(localStorage.getItem("listProducts"));
  console.log(oldData);
  oldData.unshift(newProduct);
  localStorage.setItem("listProducts", JSON.stringify(oldData));

  //! set value = string empty when finish onclick
  document.getElementById("name_Create_Product").value = "";
  document.getElementById("type_Create_Product").value = "";
  document.getElementById("birthdaytime").value = "";
  document.getElementById("amount_Create_Product").value = "";
  document.getElementById("price_Create_Product").value = "";
  document.getElementById("status_Create_Product").value = "";
  classOfProduct = "";
});
