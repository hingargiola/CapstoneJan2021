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
      <h3>Monday</h3>
      <p id="monFBread" 12="frenchBread"></p>
      <p id="monIBread"></p>
    </div>
    <div>
      <h3>Tuesday</h3>
      <p id="tueFrench"></p>
      <p id="tueIBread"></p>
    </div>
    <div>
      <h3>Wednesday</h3>
      <p id="wedFrench"></p>
      <p id="wedIBread"></p>
    </div>
    <div>
      <h3>Thursday</h3>
      <p id="thurFrench"></p>
      <p id="thurIBread"></p>
    </div>
    <div>
      <h3>Friday</h3>
      <p id="friFrench"></p>
      <p id="friIBread"></p>
    </div>
    <div>
      <h3>Saturday</h3>
      <p id="satFrench"></p>
      <p id="satIBread"></p>
    </div>
    <div>
      <h3>Sunday</h3>
      <p id="sunFrench"></p>
      <p id="sunIBread"></p>
    </div>
  </div>
  </div>
`;
