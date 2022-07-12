import { listProducts } from "../container.js";

let perPage = 5;
let currentPage = 1;
let start = 0;
let end = perPage;
let totalPages = Math.ceil(listProducts.length / perPage);
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
let tableProducts = document.querySelector(".list");

let createTableProducts = () => {
  listProducts.forEach((item, index) => {
    if (index >= start && index < end) {
      tableProducts.innerHTML += `
                <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  ${item.name}
                  </td>
                  <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                  ${item.type}
                  </td>
                  <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                  ${item.createDate}
                  </td>
                  <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                  ${item.amount}
                  </td>
                  <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                  ${item.price} VNĐ
                  </td>
                  <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                  <span class=${item.class}>
                  ${item.status}
                  </span>
                  </td>
                  <td class=" px-6 py-4 whitespace-nowrap">
                    <div class="flex">
                       <button class="md:cursor-pointer onclick="route()">
                       <a href="/editProduct">
                       <svg xmlns="http://www.w3.org/2000/svg" style="color:#1A56DB" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                       </svg>   
                       
                       </a>
                       </button>
                       <button class="md:cursor-pointer" style="margin-left:18px" onclick="deleteItem(${index})">
                         <svg xmlns="http://www.w3.org/2000/svg" style="color:#C81E1E" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                         </svg>
                       </button>
                    </div>
                  </td>
                </tr>
          `;
    }
  });
};

function deleteItem(button) {
  console.log(button);
}

//  ! BUTTON NEXT
btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage++;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  tableProducts.innerHTML = "";
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
  createTableProducts();
});

// !BUTTON PREV
btnPrev.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1;
  }
  tableProducts.innerHTML = "";
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
  createTableProducts();
});

// ! AĐ EVENT NUMBER
const changePage = () => {
  const listNumberButtons = document.querySelectorAll(".page-container li");
  for (let i = 0; i < listNumberButtons.length; i++) {
    listNumberButtons[i].addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i + 1;
      tableProducts.innerHTML = "";
      start = (currentPage - 1) * perPage;
      end = currentPage * perPage;
      createTableProducts();
    });
  }
};

changePage();

createTableProducts();
