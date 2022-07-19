let listProductsLocal = JSON.parse(localStorage.getItem("listProducts"));
var tableFilter = document.querySelector(".filterProduct");
var btn_filter = document.querySelector(".btn_Filter_Product");
var tableProducts = document.querySelector(".list-Products");
let btnNextFilter = document.querySelector(".btn-next-filter");
let btnPrevFilter = document.querySelector(".btn-prev-filter");
let numberNextFilter = document.querySelector(".number-start");
let numberEndFilter = document.querySelector(".number-end");
let totalProductFilter = document.querySelector(".totalProduct");
let perPageFilter = 5;
let currentPageFilter = 1;
let startFilter = 0;
let endFilter = perPageFilter;

tableFilter.innerHTML += `
      <div class="grid xl:grid-cols-2 xl:gap-6">
        <div>
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Sản phẩm</label
          >
          <input
            type="text"
            id="base-input"
            class="name_Filter_Product background border-solid border-2 rounded-lg border-gray-300 text-gray-900 text-sm dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Số lượng</label
          >
          <input
            type="text"
            id="base-input"
            class="amount_Filter_Product background border-solid border-2 rounded-lg border-gray-300 text-gray-900 text-sm dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div class="grid xl:grid-cols-2 xl:gap-6 mt-3">
        <div>
          <label
            for="states"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Loại SP</label
          >
          <select
            id="states"
            class="type_Filter_Product background border-solid border-2 rounded-lg border-gray-300 text-gray-900 text-sm dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
          <option selected>Loại SP</option>
          <option value="Ghế">Ghế</option>
          <option value="Máy Tính">Máy tính</option>
          <option value="Điện Thoại">Điện thoại</option>
          <option value="Tai Nghe">Tai nghe</option>
          <option value="Bàn Phím">Bàn Phím</option>
          </select>
        </div>
        <div>
          <label
            for="states"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Trạng thái</label
          >
          <select
            id="states"
            class="status_Filter_Product background border-solid border-2 rounded-lg border-gray-300 text-gray-900 text-sm dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
          <option selected>Trạng thái</option>
          <option value="Còn Hàng">Còn Hàng</option>
          <option value="Hết Hàng">Hết Hàng</option>
          </select>
        </div>
      </div>
`;

let filterProduct = (array) => {
  console.log("array", array);
  array.forEach((item, index) => {
    if (index >= startFilter && index < endFilter) {
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
                <td class=" px-6 py-4 whitespace-nowrap">
                  <button class="btn-update md:cursor-pointer">
                    <a  href="/editProduct">
                     <svg  id=${index} xmlns="http://www.w3.org/2000/svg" style="color:#1A56DB" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                     </svg>
                    </a>
                 </button>
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

var nameFilter = document.querySelector(".name_Filter_Product");
var amountFilter = document.querySelector(".amount_Filter_Product");
var typeFilter = document.querySelector(".type_Filter_Product");
var statusFilter = document.querySelector(".status_Filter_Product");

let handleFilter = () => {
  let nameFilterValue = nameFilter.value;
  let amountFilterValue = parseInt(amountFilter.value) || null;
  // let amountFilterValue = amountFilter.value;
  let typeFilterValue = typeFilter.value;
  let statusFilterValue = statusFilter.value;

  let productFilter = listProductsLocal.filter((item) => {
    // console.log(
    //   "name:",
    //   item.name
    //     .toUpperCase()
    //     .includes(nameFilterValue.toUpperCase() && nameFilterValue !== "")
    // );
    // console.log(
    //   "amount:",
    //   String(item.amount).includes(String(amountFilterValue))
    // );
    // console.log(
    //   "type",
    //   item.type.toUpperCase().includes(typeFilterValue.toUpperCase())
    // );
    // console.log(
    //   "status",
    //   item.status.toUpperCase().includes(statusFilterValue.toUpperCase())
    // );
    return (
      String(item.amount).includes(String(amountFilterValue)) ||
      (item.type.toUpperCase().includes(typeFilterValue.toUpperCase()) &&
        typeFilterValue !== "LOẠI SP") ||
      (item.status.toUpperCase().includes(statusFilterValue.toUpperCase()) &&
        statusFilterValue !== "TRẠNG THÁI") ||
      (item.name.toUpperCase().includes(nameFilterValue.toUpperCase()) &&
        nameFilterValue !== "")
    );
  });
  console.log(productFilter);
  tableProducts.innerHTML = "";
  filterProduct(productFilter);
  let totalPageFilter = Math.ceil(productFilter.length / perPageFilter);
  totalProductFilter.innerText = productFilter.length;
  numberNextFilter.innerText = 1;
  numberEndFilter.innerText = productFilter.length;
  //  ! BUTTON NEXT
  btnNextFilter.addEventListener("click", () => {
    currentPageFilter++;
    if (currentPageFilter > totalPageFilter) {
      currentPageFilter = totalPageFilter;
    }
    tableProducts.innerHTML = "";
    startFilter = (currentPageFilter - 1) * perPageFilter;
    endFilter = currentPageFilter * perPageFilter;
    // filterProduct(productFilter);
    totalProductFilter.innerText = productFilter.length;
    numberNextFilter.innerText = startFilter;
    numberEndFilter.innerText =
      endFilter < productFilter.length ? endFilter : productFilter.length;
    filterProduct(productFilter);
  });
  // !END BUTTON NEXT

  // !BUTTON PREV
  btnPrevFilter.addEventListener("click", () => {
    currentPageFilter--;
    if (currentPageFilter <= 1) {
      currentPageFilter = 1;
    }
    tableProducts.innerHTML = "";
    startFilter = (currentPageFilter - 1) * perPageFilter;
    endFilter = currentPageFilter * perPageFilter;
    // filterProduct(productFilter);
    // console.log(startFilter);
    // console.log(endFilter);
    totalProductFilter.innerText = productFilter.length;
    numberNextFilter.innerText =
      startFilter < 1 ? 1 : (currentPageFilter - 1) * perPageFilter;
    numberEndFilter.innerText = endFilter;
    filterProduct(productFilter);
  });
  // !END BUTTON PREV
};

nameFilter.addEventListener("input", handleFilter);
amountFilter.addEventListener("input", handleFilter);
typeFilter.addEventListener("change", handleFilter);
statusFilter.addEventListener("change", handleFilter);

// TODO : HIDE AND SHOW FILTER
btn_filter.addEventListener("click", (e) => {
  e.preventDefault();
  if (tableFilter.style.display === "block") {
    tableFilter.style.display = "none";
    btn_filter.innerText = "Bộ lọc";
  } else {
    tableFilter.style.display = "block";
    btn_filter.innerText = "Ẩn bộ lọc";
  }
});
