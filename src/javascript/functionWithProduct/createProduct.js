import { listProducts } from "../container";
// localStorage.setItem("listProducts", JSON.stringify(listProducts));
let buttonSave = document.getElementById("save_Create_Account");
buttonSave.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name_Create_Product").value;
  let type = document.getElementById("type_Create_Product").value;
  let createDate = document.getElementById("birthdaytime").value;
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
    createDate: createDate,
    amount: convertAmount,
    price: price,
    status: status,
    class: classOfProduct,
  };
  let oldData = JSON.parse(localStorage.getItem("listProducts"));
  // console.log(oldData);
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
