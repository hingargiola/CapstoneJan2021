import Navigo from "navigo";
import { capitalize } from "lodash";
import * as state from "./store";
import { Header, Nav, Main, Footer } from "./components";
import axios from "axios";

const router = new Navigo(window.location.origin);

router.hooks({
  before: (done, params) => {
    // Because not all routes pass params we have to guard against is being undefined
    const page =
      params && Object.prototype.hasOwnProperty.call(params, "page")
        ? capitalize(params.page)
        : "Home";
    console.log(state[page]);
    console.log(page);
    fetchDataByView(state[page]);
    done();
  },
});

router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.page);
      render(state[page]);
    },
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
      ${Header(st)}
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer()}
    `;
  addEventListenersByView(st);
  router.updatePageLinks();
}
function addEventListenersByView(st = state.Home) {
  if (st.view === "Movement") {
    document.querySelector("#item").value = st.selected._id;
    document.querySelector("#item").addEventListener("change", (event) => {
      event.preventDefault();
      const element = event.target;
      const selected = element.options[element.selectedIndex].value;
      console.log(element.options[element.selectedIndex].value);
      st.selected = st.movement.find(bread => bread._id === selected);
      console.log(st.selected);
      render(st);
        });
  }
}

function fetchDataByView(st = state.Home) {
  console.log(st.view);
  switch (st.view) {
    case "Movement":
      axios
        .get(`https://hingargiolacapstone.herokuapp.com/movement`)
        .then((response) => {
          console.log(response.data);
          state[st.view].movement = response.data;
          render(st);
        })
        .catch((error) => {
          console.log("It puked", error);
        });
      break;
  }
}
