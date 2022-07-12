var tableFilter = document.querySelector(".filterProduct");
var btn_filter = document.querySelector(".btn_filter");

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
            class="background border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="background border-solid border-2 rounded-lg border-gray-300 text-gray-900 text-sm dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="background border-solid border-2 rounded-lg border-gray-300 text-gray-900 text-sm dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Loại SP</option>
            <option value="chair">Ghế</option>
            <option value="desktop">Máy tính</option>
            <option value="mobile">Điện thoại</option>
            <option value="headphone">Tai nghe</option>
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
            class="background border-solid border-2 rounded-lg border-gray-300 text-gray-900 text-sm dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Trạng thái</option>
            <option value="chair">Còn hàng</option>
            <option value="desktop">Hết hàng</option>
          </select>
        </div>
      </div>
`;

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
