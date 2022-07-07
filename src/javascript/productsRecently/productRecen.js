import { productsRecently } from "../container.js";

let tableOrder = document.querySelector("tbody");

let createTable = () => {
  productsRecently.forEach((item) => {
    tableOrder.innerHTML += `
        <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
              ${item.name}
              </td>
              <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              ${item.time}
              </td>
              <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              ${item.totalMoney}
              </td>
              <td class="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
              <span class="cancel">
              ${item.status}
              </span>
              </td>
            </tr>
        `;
  });
};

createTable();
