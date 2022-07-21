let listProductsLocal = JSON.parse(localStorage.getItem("listProducts"));
let btnSearch = document.querySelector(".btn-Search");
let btnNextSearch = document.querySelector(".btn-next");
let btnPrevSearch = document.querySelector(".btn-prev");
let numberNextSearch = document.querySelector(".number-start");
let numberEndSearch = document.querySelector(".number-end");
let totalProductSearch = document.querySelector(".totalProduct");
let perPageSearch = 5;
let currentPageSearch = 1;
let startSearch = 0;
let endSearch = perPageSearch;

let listSearchProduct = (array) => {
  console.log("arrayProduct", array);
  array.forEach((item, index) => {
    if (index >= startSearch && index < endSearch) {
      let Day = new Date(item.createDate).getDate();
      let Year = new Date(item.createDate).getFullYear();
      let Month = new Date(item.createDate).toLocaleString("default", {
        month: "long",
      });
      let OurNewDateFormat = `${Month} ${Day},${Year}`;
      let tableProducts = document.querySelector(".list-Products");
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
              
                  <a class="btn-update" href="/editProduct">
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

btnSearch.addEventListener("click", () => {
  let valueSearchInput = document.getElementById("inputSearchProduct").value;
  let productSearch = listProductsLocal.filter((item) => {
    return (
      item.status.toUpperCase().includes(valueSearchInput.toUpperCase()) ||
      item.name.toUpperCase().includes(valueSearchInput.toUpperCase()) ||
      item.type.toUpperCase().includes(valueSearchInput.toUpperCase())
    );
  });
  // console.log(productSearch);
  let tableProducts = document.querySelector(".list-Products");
  tableProducts.innerHTML = "";
  listSearchProduct(productSearch);
  let totalPageSearch = Math.ceil(productSearch.length / perPageSearch);
  totalProductSearch.innerText = productSearch.length;
  numberNextSearch.innerText = 1;
  numberEndSearch.innerText = productSearch.length;
  //  ! BUTTON NEXT
  btnNextSearch.addEventListener("click", () => {
    currentPageSearch++;
    if (currentPageSearch > totalPageSearch) {
      currentPageSearch = totalPageSearch;
    }
    tableProducts.innerHTML = "";
    startSearch = (currentPageSearch - 1) * perPageSearch;
    endSearch = currentPageSearch * perPageSearch;
    listSearchProduct(productSearch);
    totalProductSearch.innerText = productSearch.length;
    numberNextSearch.innerText = startSearch;
    numberEndSearch.innerText =
      endSearch < productSearch.length ? endSearch : productSearch.length;
  });
  // !BUTTON PREV
  btnPrevSearch.addEventListener("click", () => {
    currentPageSearch--;
    if (currentPageSearch <= 1) {
      currentPageSearch = 1;
    }
    tableProducts.innerHTML = "";
    startSearch = (currentPageSearch - 1) * perPageSearch;
    endSearch = currentPageSearch * perPageSearch;
    listSearchProduct(productSearch);
    totalProductSearch.innerText = productSearch.length;
    numberNextSearch.innerText =
      startSearch < 1 ? 1 : (currentPageSearch - 1) * perPageSearch;
    numberEndSearch.innerText = endSearch;
  });
});
