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
  router.updatePageLinks();
}

// if (st.view === "Movement") {
//   document.querySelector("#frenchBread").addEventListener("click", (event) => {
//     event.preventDefault();
//     const list = document.querySelector("#frenchBread");
//     console.log(list.value);
//     const requestData = {
//       monday: Number,
//       tuesday: Number,
//       wednesday: Number,
//       thursday: Number,
//       friday: Number,
//       saturday: Number,
//       sunday: Number
//     };

// const requestData = {
//   frenchBread: inputList.frenchBread.value,
// };

// axios
// .get(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`, {
//   headers: {
//     Authorization: `token ${process.env.GITHUB_TOKEN}`,
//   },
// })
// .then((response) => console.log(response.data));

// axios
// .post(`https://hingargiolacapstone.herokuapp.com/movement`, requestData)
// .then(response => {
//   state.frenchBread.frenchBread.push(response.data);
//   router.navigate("/frenchBread");
// })
// .catch(error => {
//   console.log("It puked", error);
// });

function fetchDataByView(st = state.Home) {
  console.log(st.view)
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
