var listProductsLocal = JSON.parse(localStorage.getItem("listProducts"));
let tableProducts = document.querySelector(".list-Products");
let perPage = 5;
let currentPage = 1;
let start = 0;
let end = perPage;
let totalPages = Math.ceil(listProductsLocal.length / perPage);
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");
let numberNext = document.querySelector(".number-start");
let numberEnd = document.querySelector(".number-end");
let totalProduct = document.querySelector(".totalProduct");

let createTableProducts = () => {
  listProductsLocal.map((item, index) => {
    if (index >= start && index < end) {
      let Day = new Date(item.createDate).getDate();
      let Year = new Date(item.createDate).getFullYear();
      let Month = new Date(item.createDate).toLocaleString("default", {
        month: "long",
      });
      let OurNewDateFormat = `${Month} ${Day},${Year}`;
      tableProducts.innerHTML += `
        <tr class="border-b">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                 ${item.name}
            </td>
            <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                 ${item.type}
            </td>
            <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                 ${OurNewDateFormat}
            </td>
            <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                 ${item.amount} cái
            </td>
            <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                 ${item.price} VNĐ
            </td>
            <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
            <span class=${item.class}>
                 ${item.status}
            </span>
            </td>
            <td class="flex px-6 py-4 whitespace-nowrap">
           
                <a class = "btn-update" href="/editProduct">
                 <svg  id=${index} xmlns="http://www.w3.org/2000/svg" style="color:#1A56DB" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                 </svg>    
                </a>
          
              <button class="md:cursor-pointer btn-delete" style="margin-left:18px">
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

createTableProducts();

const btnUpdateClick = () => {
  var updateButtons = document.querySelectorAll(".btn-update");
  for (let i = 0; i < updateButtons.length; i++) {
    var updateButton = updateButtons[i];
    updateButton.addEventListener("click", (e) => {
      let productNeedUpdate = [];
      //   console.log(parseInt(e.target.id));
      productNeedUpdate.push({
        id: parseInt(e.target.id),
        value: listProductsLocal[parseInt(e.target.id)],
      });
      console.log(productNeedUpdate);
      localStorage.setItem(
        "productNeedUpdate",
        JSON.stringify(productNeedUpdate)
      );
    });
  }
};

btnUpdateClick();

const btnDeleteClick = () => {
  var deleteButtons = document.querySelectorAll(".btn-delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    var deleteButton = deleteButtons[i];
    deleteButton.addEventListener("click", (e) => {
      // console.log(parseInt(e.target.id));
      listProductsLocal.splice(parseInt(e.target.id), 1);
      localStorage.setItem("listProducts", JSON.stringify(listProductsLocal));
      tableProducts.innerHTML = "";
      createTableProducts();
      totalProduct.innerText = listProductsLocal.length;
    });
  }
};

btnDeleteClick();

//  ! BUTTON NEXT
btnNext.addEventListener("click", () => {
  currentPage++;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  tableProducts.innerHTML = "";
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
  createTableProducts();
  btnUpdateClick();
  btnDeleteClick();
  totalProduct.innerText = listProductsLocal.length;
  numberNext.innerText = start;
  numberEnd.innerText =
    end < listProductsLocal.length ? end : listProductsLocal.length;
});

// !BUTTON PREV
btnPrev.addEventListener("click", () => {
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1;
  }
  tableProducts.innerHTML = "";
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
  createTableProducts();
  btnUpdateClick();
  btnDeleteClick();
  totalProduct.innerText = listProductsLocal.length;
  numberNext.innerText = start < 1 ? 1 : (currentPage - 1) * perPage;
  numberEnd.innerText = end;
});

totalProduct.innerText = listProductsLocal.length;
