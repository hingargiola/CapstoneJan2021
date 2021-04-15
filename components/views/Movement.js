import html from "html-literal";

export default (st) => html`
<h2>Movement</h2>

<div>
    <label for="item">Item:</label>
    <select id="item" name="item">
      <option value="">Select Bakery Item</option>
      ${
        st.movement.map(function (option) {
          return `<option value="${option._id}">${option.name}</option>`;
        }).join("")}
    </select>
  </div>

<div class="row">
    <div>
      <h3>Monday</h3>
      <p>${st.selected.monday}</p>
    </div>
    <div>
      <h3>Tuesday</h3>
      <p>${st.selected.tuesday}</p>
    </div>
    <div>
      <h3>Wednesday</h3>
      <p>${st.selected.wednesday}</p>
    </div>
    <div>
      <h3>Thursday</h3>
      <p>${st.selected.thursday}</p>
    </div>
    <div>
      <h3>Friday</h3>
      <p>${st.selected.friday}</p>
    </div>
    <div>
      <h3>Saturday</h3>
      <p>${st.selected.saturday}</p>
    </div>
    <div>
      <h3>Sunday</h3>
      <p>${st.selected.sunday}</p>
    </div>
  </div>
  </div>


`
