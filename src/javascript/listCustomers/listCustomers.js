// import {listCustomer } from "../container";
var listCustomerLocal = JSON.parse(localStorage.getItem("listCustomer"));
let tableCustomers = document.querySelector(".list-Customers");
let totalCustomer = document.querySelector(".totalCustomer");
let btnNextCus = document.querySelector(".btn-next-customer");
let btnPrevCus = document.querySelector(".btn-prev-customer");
let numberNextCus = document.querySelector(".numberStartCustomer");
let numberEndCus = document.querySelector(".numberEndCustomer");
let perPageCus = 5;
let currentPageCus = 1;
let startCus = 0;
let endCus = perPageCus;
let totalPagesCus = Math.ceil(listCustomerLocal.length / perPageCus);
let createTableCustomers = () => {
  listCustomerLocal.map((item, index) => {
    if (index >= startCus && index < endCus) {
      let Day = new Date(item.birthDayCus).getDate();
      let Year = new Date(item.birthDayCus).getFullYear();
      let Month = new Date(item.birthDayCus).toLocaleString("default", {
        month: "long",
      });
      let OurNewDateFormat = `${Month} ${Day},${Year}`;
      tableCustomers.innerHTML += `
        <tr class="border-b">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
             ${item.nameCus}
        </td>
        <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
             ${item.numberPhoneCus}
        </td>
        <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
             ${OurNewDateFormat}
        </td>
        <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
             ${item.address} 
        </td>
        <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
             ${item.emailCus}
        </td>
        <td class="flex px-6 py-4 whitespace-nowrap">
       
            <a  href="/editCustomer" class = "btn-update-customer">
             <svg  id=${index} xmlns="http://www.w3.org/2000/svg" style="color:#1A56DB" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
             </svg>    
            </a>
      
          <button class="btn-delete-customer md:cursor-pointer" style="margin-left:18px">
            <svg id=${index} xmlns="http://www.w3.org/2000/svg" style="color:#C81E1E" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </td>
    </tr>
            `;
    }
  });
};

createTableCustomers();
totalCustomer.innerText = listCustomerLocal.length;

const btnUpdateCusClick = () => {
  var updateButtons = document.querySelectorAll(".btn-update-customer");
  for (let i = 0; i < updateButtons.length; i++) {
    var updateButton = updateButtons[i];
    updateButton.addEventListener("click", (e) => {
      //   e.preventDefault();
      let customerNeedUpdate = [];
      //   console.log(parseInt(e.target.id));
      customerNeedUpdate.push({
        id: parseInt(e.target.id),
        value: listCustomerLocal[parseInt(e.target.id)],
      });
      //   console.log(customerNeedUpdate);
      localStorage.setItem(
        "customerNeedUpdate",
        JSON.stringify(customerNeedUpdate)
      );
    });
  }
};
btnUpdateCusClick();

// ! BUTTON DELETE
const btnDeleteCusClick = () => {
  var deleteButtons = document.querySelectorAll(".btn-delete-customer");
  for (let i = 0; i < deleteButtons.length; i++) {
    var deleteButton = deleteButtons[i];
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
      console.log(parseInt(e.target.id));
      listCustomerLocal.splice(parseInt(e.target.id), 1);
      localStorage.setItem("listCustomer", JSON.stringify(listCustomerLocal));
      tableCustomers.innerHTML = "";
      createTableCustomers();
      totalCustomer.innerText = listCustomerLocal.length;
    });
  }
};
btnDeleteCusClick();

//  ! BUTTON NEXT
btnNextCus.addEventListener("click", () => {
  currentPageCus++;
  if (currentPageCus > totalPagesCus) {
    currentPageCus = totalPagesCus;
  }
  tableCustomers.innerHTML = "";
  startCus = (currentPageCus - 1) * perPageCus;
  endCus = currentPageCus * perPageCus;
  createTableCustomers();
  btnUpdateCusClick();
  btnDeleteCusClick();
  totalCustomer.innerText = listCustomerLocal.length;
  numberNextCus.innerText = startCus;
  numberEndCus.innerText =
    endCus < listCustomerLocal.length ? endCus : listCustomerLocal.length;
});

// !BUTTON PREV
btnPrevCus.addEventListener("click", () => {
  currentPageCus--;
  if (currentPageCus <= 1) {
    currentPageCus = 1;
  }
  tableCustomers.innerHTML = "";
  startCus = (currentPageCus - 1) * perPageCus;
  endCus = currentPageCus * perPageCus;
  createTableCustomers();
  btnUpdateCusClick();
  btnDeleteCusClick();
  totalCustomer.innerText = listCustomerLocal.length;
  numberNextCus.innerText =
    startCus < 1 ? 1 : (currentPageCus - 1) * perPageCus;
  numberEndCus.innerText = endCus;
});
