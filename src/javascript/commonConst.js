const CONST_PERPAGE = 5;
const CONST_CURRENTPAGE = 1;
const CONST_STARTPAGE = 0;
const CONST_ENDSEARCH = CONST_PERPAGE;
const CONST_LISTPRODUCTLOCAL = JSON.parse(localStorage.getItem("listProducts"));
const CONST_LISTCUSLOCAL = JSON.parse(localStorage.getItem("listCustomer"));

export {
  CONST_PERPAGE,
  CONST_CURRENTPAGE,
  CONST_STARTPAGE,
  CONST_ENDSEARCH,
  CONST_LISTPRODUCTLOCAL,
  CONST_LISTCUSLOCAL,
};
