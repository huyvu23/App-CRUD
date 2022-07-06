import { newCustomers } from "../container.js";

let cusList = document.querySelector(".new-customers");

let createCustomers = () => {
  newCustomers.forEach((customer) => {
    cusList.innerHTML += `<div class="flex items-center border-b-2">
                        <img class='w-[32px] h-[32px] rounded-2xl object-cover ' src="${customer.image}"/>
                            <div class = "pl-[8px]">
                        <div class="text-gray-900 text-lg font-semibold">${customer.name}</div>
                        <div class="text-sm text-[#6b7280]">${customer.email}</div>
                            </div>
                     </div>`;
  });
};

createCustomers();
