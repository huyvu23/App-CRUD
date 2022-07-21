import { newCustomers } from "../container.js";

let cusList = document.querySelector(".new-customers");

let createCustomers = () => {
  newCustomers.forEach((customer) => {
    cusList.innerHTML += `
    <div class="flex items-center border-b-2 pt-3 py-3">
        <div class="w-[32px] h-[32px] mr-3" >
          <img class="w-[32px] h-[32px] border object-cover" src="${customer.image}"/>
        </div>
        <div class = "flex flex-col ">
            <div>
                <h1 class="text-black font-weight">${customer.name}</h1>
            </div>
            <div>
                 <h2 class="text-sm text-[#afafb4]">${customer.email}</h2>
            </div>
        </div>
      </div>`;
  });
};

createCustomers();
