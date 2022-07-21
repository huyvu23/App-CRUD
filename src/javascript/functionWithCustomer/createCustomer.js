// import { listCustomers } from "../container";
// localStorage.setItem("listCustomer", JSON.stringify(listCustomers));
var listData = [];
var btnSaveAccount = document.getElementById("save_Create_Account");
let listDistrict = document.getElementById("district_Cus");
let listCity = document.getElementById("city_Cus");
let getData = async () => {
  const baseURL = "https://provinces.open-api.vn/api/?depth=2";
  await fetch(baseURL)
    .then((response) => response.json())
    .then((results) => {
      listData = results;
    })
    .catch((err) => {
      console.log("có lỗi");
    });

  for (var i = 0; i < listData.length; i++) {
    for (var j = 0; j < listData[i].districts.length; j++) {
      if (
        listData[i].districts[j].division_type === "quận" ||
        listData[i].districts[j].division_type === "huyện"
      ) {
        listDistrict.innerHTML += `<option value="${listData[i].districts[j].name}">${listData[i].districts[j].name}</option>`;
      }
    }
  }
  for (var i = 0; i < listData.length; i++) {
    if (
      listData[i].division_type === "thành phố trung ương" ||
      listData[i].division_type === "tỉnh"
    ) {
      listCity.innerHTML += `<option value="${listData[i].name}">${listData[
        i
      ].name.replace("Tỉnh ", "Thành phố ")}  </option>`;
    }
  }
};
getData();

btnSaveAccount.addEventListener("click", (e) => {
  e.preventDefault();
  let nameCus = document.getElementById("name_Create_Customer").value;
  let numberPhoneCus = document.getElementById("number_Phone_Customer").value;
  let districtCus =
    listDistrict.value.replace("Quận", "") &&
    listDistrict.value.replace("Huyện", "");
  let cityCus = listCity.value.replace("Thành phố", "");
  let birthDayCus = document.getElementById("birthdaytime_Customer").value;
  let emailCus = document.getElementById("email_Create_Customer").value;

  let newCustomer = {
    nameCus: nameCus,
    numberPhoneCus: numberPhoneCus,
    birthDayCus: birthDayCus,
    address: `${districtCus},${cityCus}`,
    emailCus: emailCus,
  };
  let oldData = JSON.parse(localStorage.getItem("listCustomer"));
  oldData.unshift(newCustomer);
  localStorage.setItem("listCustomer", JSON.stringify(oldData));
  document.getElementById("name_Create_Customer").value = "";
  document.getElementById("number_Phone_Customer").value = "";
  listDistrict.value = "";
  listCity.value = "";
  document.getElementById("email_Create_Customer").value = "";
});
