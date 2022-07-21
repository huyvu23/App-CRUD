import { Products } from "../container.js";

let listProducts = document.querySelector(".products");
let createProducts = () => {
  Products.forEach((product) => {
    listProducts.innerHTML += `
    <div class="border-b-2 px-[24px]">
      <div class="flex justify-between items-center py-3">
        <div>
            <h1 class="text-black font-weight">${product.nameProducts}</h1>
            <div class="text-xs text-[#6B7280]">${product.codeProduct}</div>
        </div>
        <div class="flex ">
          <div class="text-black font-weight" style="margin-right:5px">${product.totalSales}</div> <span class="font-extralight">sales</span></div>
        </div>
    </div>`;
  });
};

createProducts();
