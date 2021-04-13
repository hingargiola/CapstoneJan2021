import html from "html-literal";

export default () => html`
<h2>Pitch</h2>

<div>
    <label for="item">Item:</label>
    <select id="item" name="item">
      <option value="">Select Bakery Item</option>
      <option value="frenchBread">French Bread</option>
      <option value="italianBread">Italian Bread </option>
    </select>
  </div>




<div class="row">
    <div>
      <h3>Monday<br>2</h3>
    </div>
    <div>
      <h3>Tuesday<br>5</h3>
    </div>
    <div>
      <h3>Wednesday<br>0</h3>
    </div>
    <div>
      <h3>Thursday<br>0</h3>
    </div>
    <div>
      <h3>Friday<br>12</h3>
    </div>
    <div>
      <h3>Saturday<br>4</h3>
    </div>
    <div>
      <h3>Sunday<br>3</h3>
    </div>
  </div>
`;
