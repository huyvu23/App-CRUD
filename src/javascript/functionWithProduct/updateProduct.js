let listProductsLocal = JSON.parse(localStorage.getItem("listProducts"));
// console.log('list',listProductsLocal);
let productNeedUpdate = JSON.parse(localStorage.getItem("productNeedUpdate"));
let saveBtn = document.querySelector("#Save");

// console.log(productNeedUpdate);
// console.log(typeof productNeedUpdate[0].createDate);
// console.log(productNeedUpdate[0]);

document.getElementById("name_Update_Product").value =
  productNeedUpdate[0].value.name;
document.getElementById("amount_Update_Product").value =
  productNeedUpdate[0].value.amount;
document.getElementById("birthdaytime_Update").value =
  productNeedUpdate[0].value.createDate;
document.getElementById("price_Update_Product").value =
  productNeedUpdate[0].value.price;
document.getElementById("type_Update_Product").value =
  productNeedUpdate[0].value.type;
document.getElementById("status_Update_Product").value =
  productNeedUpdate[0].value.status;

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nameUpdate = document.getElementById("name_Update_Product").value;
  let amountUpdate = document.getElementById("amount_Update_Product").value;
  let convertAmountUpdate = parseInt(amountUpdate);
  let createDateUpdate = document.getElementById("birthdaytime_Update").value;
  let priceUpdate = document.getElementById("price_Update_Product").value;
  let typeUpdate = document.getElementById("type_Update_Product").value;
  let statusUpdate = document.getElementById("status_Update_Product").value;
  let classOfProductUpdate;
  if (amountUpdate > 0) {
    classOfProductUpdate = "success";
  } else {
    classOfProductUpdate = "cancel";
  }
  let productUpdate = JSON.parse(localStorage.getItem("listProducts"));
  productUpdate[productNeedUpdate[0].id] = {
    name: nameUpdate,
    type: typeUpdate,
    createDate: createDateUpdate,
    amount: convertAmountUpdate,
    price: priceUpdate,
    status: statusUpdate,
    class: classOfProductUpdate,
  };
  console.log(productUpdate[productNeedUpdate[0].id]);
  localStorage.setItem("listProducts", JSON.stringify(productUpdate));
  //! set value = string empty when finish onclick
  document.getElementById("name_Update_Product").value = "";
  document.getElementById("type_Update_Product").value = "";
  document.getElementById("birthdaytime_Update").value = "";
  document.getElementById("amount_Update_Product").value = "";
  document.getElementById("price_Update_Product").value = "";
  document.getElementById("status_Update_Product").value = "";
});
