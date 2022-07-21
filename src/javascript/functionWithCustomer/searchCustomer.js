let listCusLocal = JSON.parse(localStorage.getItem("listCustomer"));
let btnSearchCus = document.querySelector(".btn-Search-Customer");
let btnNextSearch = document.querySelector(".btn-next-customer");
let btnPrevSearch = document.querySelector(".btn-prev-customer");
let numberNextSearchCus = document.querySelector(".numberStartCustomer");
let numberEndSearchCus = document.querySelector(".numberEndCustomer");
var tableCus = document.querySelector(".list-Customers");
let totalCusSearch = document.querySelector(".totalCustomer");
let perPageSearchCus = 5;
let currentPageSearchCus = 1;
let startSearchCus = 0;
let endSearchCus = perPageSearchCus;

let listSearchCus = (array) => {
  console.log("array", array);
  array.forEach((item, index) => {
    if (index >= startSearchCus && index < endSearchCus) {
      let Day = new Date(item.birthDayCus).getDate();
      let Year = new Date(item.birthDayCus).getFullYear();
      let Month = new Date(item.birthDayCus).toLocaleString("default", {
        month: "long",
      });
      let OurNewDateFormat = `${Month} ${Day},${Year}`;
      tableCus.innerHTML += `
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

btnSearchCus.addEventListener("click", () => {
  let valueSearchInput = document.getElementById("inputSearchCustomer").value;
  let cusSearch = listCusLocal.filter((item) => {
    return (
      item.nameCus.toUpperCase().includes(valueSearchInput.toUpperCase()) ||
      item.numberPhoneCus
        .toUpperCase()
        .includes(valueSearchInput.toUpperCase()) ||
      item.address.toUpperCase().includes(valueSearchInput.toUpperCase()) ||
      item.emailCus.toUpperCase().includes(valueSearchInput.toUpperCase())
    );
  });
  tableCus.innerHTML = "";
  listSearchCus(cusSearch);
  let totalPageSearch = Math.ceil(cusSearch.length / perPageSearchCus);
  totalCusSearch.innerText = cusSearch.length;
  numberNextSearchCus.innerText = 1;
  numberEndSearchCus.innerText = cusSearch.length;
  //  ! BUTTON NEXT
  btnNextSearch.addEventListener("click", () => {
    currentPageSearchCus++;
    if (currentPageSearchCus > totalCusSearch) {
      currentPageSearchCus = totalCusSearch;
    }
    tableCus.innerHTML = "";
    listSearchCus(cusSearch);
    startSearchCus = (currentPageSearchCus - 1) * perPageSearchCus;
    endSearchCus = currentPageSearchCus * perPageSearchCus;
    totalCusSearch.innerText = cusSearch.length;
    numberNextSearchCus.innerText = startSearchCus;
    numberEndSearchCus.innerText =
      endSearchCus < cusSearch.length ? endSearchCus : cusSearch.length;
  });
  // !BUTTON PREV
//   btnPrevSearch.addEventListener("click", () => {
//     currentPageSearchCus--;
//     if (currentPageSearchCus <= 1) {
//       currentPageSearchCus = 1;
//     }
//     tableCus.innerHTML = "";
//     listSearchCus(cusSearch);
//     startSearchCus = (currentPageSearchCus - 1) * perPageSearchCus;
//     endSearchCus = currentPageSearchCus * perPageSearchCus;
//     totalCusSearch.innerText = cusSearch.length;
//     numberNextSearchCus.innerText =
//       startSearchCus < 1 ? 1 : (currentPageSearchCus - 1) * perPageSearchCus;
//     numberEndSearchCus.innerText = endSearchCus;
//   });
});
