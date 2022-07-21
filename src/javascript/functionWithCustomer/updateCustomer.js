let listCusLocal = JSON.parse(localStorage.getItem("listCustomer"));
let cusNeedUpdate = JSON.parse(localStorage.getItem("customerNeedUpdate"));
let saveUpdateCus = document.getElementById("save_Update_Cus");
let listDistrictUpdate = document.getElementById("district_Update_Cus");
let listCityUpdate = document.getElementById("city_Update_Cus");
let listAddress = [];

let getAddress = async () => {
  const baseURL = "https://provinces.open-api.vn/api/?depth=2";
  await fetch(baseURL)
    .then((response) => response.json())
    .then((results) => {
      listAddress = results;
    })
    .catch((err) => {
      console.log("có lỗi");
    });

  for (var i = 0; i < listAddress.length; i++) {
    for (var j = 0; j < listAddress[i].districts.length; j++) {
      if (
        listAddress[i].districts[j].division_type === "quận" ||
        listAddress[i].districts[j].division_type === "huyện"
      ) {
        listDistrictUpdate.innerHTML += `<option value="${listAddress[i].districts[j].name}">${listAddress[i].districts[j].name}</option>`;
      }
    }
  }
  for (var i = 0; i < listAddress.length; i++) {
    if (
      listAddress[i].division_type === "thành phố trung ương" ||
      listAddress[i].division_type === "tỉnh"
    ) {
      listCityUpdate.innerHTML += `<option value="${
        listAddress[i].name
      }">${listAddress[i].name.replace("Tỉnh ", "Thành phố ")}  </option>`;
    }
  }
};
getAddress();

let addressCus = cusNeedUpdate[0].value.address;
console.log(addressCus);
let arrAddress = addressCus.split(", ");
console.log(`Thành phố ${arrAddress[1]}`);

document.getElementById("name_Update_Customer").value =
  cusNeedUpdate[0].value.nameCus;
document.getElementById("number_Update_Customer").value =
  cusNeedUpdate[0].value.numberPhoneCus;
document.getElementById("email_Update_Customer").value =
  cusNeedUpdate[0].value.emailCus;
document.getElementById("birthdaytime_Update_Customer").value =
  cusNeedUpdate[0].value.birthDayCus;
// document.getElementById("city_Update_Cus").value = `Thành phố ${arrAddress[1]}`;
// document.getElementById('district_Update_Cus').value = cusNeedUpdate[0].value.
// `<option value=`Thành phố ${arrAddress[1]}`>`Thành phố ${arrAddress[1]}`</option>`;

saveUpdateCus.addEventListener("click", (e) => {
  e.preventDefault();
  let nameUpdate = document.getElementById("name_Update_Customer").value;
  let numberPhoneUpdate = document.getElementById(
    "number_Update_Customer"
  ).value;
  let emailUpdate = document.getElementById("email_Update_Customer").value;
  let birthUpdate = document.getElementById(
    "birthdaytime_Update_Customer"
  ).value;
  let cityUpdate = listCityUpdate.value.replace("Thành phố", "");
  let districtUpdate = listDistrict.value.includes("Huyện")
    ? listDistrict.value.replace("Huyện", "")
    : listDistrict.value.replace("Quận", "");

  let customerUpdate = JSON.parse(localStorage.getItem("listCustomer"));
  customerUpdate[customerUpdate[0].id] = {
    nameCus: nameUpdate,
    numberPhoneCus: numberPhoneUpdate,
    birthDayCus: birthUpdate,
    address: `${districtUpdate},${cityUpdate}`,
    emailCus: emailUpdate,
  };
  //   !SET VALUE EQUAL EMPTY WHEN FINISH ONCLICK
  localStorage.setItem("listCustomer", JSON.stringify(customerUpdate));
  document.getElementById("name_Update_Customer").value = "";
  document.getElementById("number_Update_Customer").value = "";
  document.getElementById("email_Update_Customer ").value = "";
  document.getElementById("birthdaytime_Update_Customer").value = "";
  listCityUpdate.value = "";
  listDistrictUpdate.value = "";
});
