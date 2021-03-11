import Navigo from "navigo";
import { capitalize } from "lodash";
import * as state from "./store";
import { Header, Nav, Main, Footer } from "./components";



const router = new Navigo(window.location.origin);
router.updatePageLinks();


function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
}
render(state.Home);



router.on({
  "/": () => render(state.Home),
":page": params => {
    let page = capitalize(params.page);
    render(state[page]);
  }});


