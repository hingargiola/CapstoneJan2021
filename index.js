import Navigo from "navigo";
import { capitalize } from "lodash";
import * as state from "./store";
import { Header, Nav, Main, Footer } from "./components";



const router = new Navigo(window.location.origin);



function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();
}


router.on({
  "/": () => render(state.Home),
":page": params => {
    let page = capitalize(params.page);
    render(state[page]);
  }}).resolve();

  axios
  .get(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  })
  .then((response) => console.log(response.data));


