const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
  location.reload();
};

const routes = {
  404: "/src/pages/404.html",
  "/customers": "/src/pages/customers.html",
  "/home": "/src/pages/home.html",
  "/listProducts": "/src/pages/listProducts.html",
  "/createProduct": "/src/pages/createProduct.html",
  "/editProduct": "src/pages/editProduct.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("listProducts").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
