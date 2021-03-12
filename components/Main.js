import * as views from "./views";

export default st => `
${views[st.view](st)}`;

// export default () => `
// ${views["Home"]()}
// ${views["Movement"]()}
// ${views["Pitch"]()}
// ${views["Production"]()}
// ${views["Order"]()}
// `;

