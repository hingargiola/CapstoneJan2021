import html from "html-literal";

export default () => html`
<h2>Production</h2>


<div class="production">
<div>
    <label for="sauce">Monday:</label>
    <input type="text" name="monFBread" id="monFBread" placeholder="amount" required>
  </div>

  <div>
    <label for="sauce">Tuesday:</label>
    <input type="text" name="tueFBread" id="tueFBread" placeholder="amount" required>
  </div>

  <div>
    <label for="sauce">Wednesday:</label>
    <input type="text" name="wedFBread" id="wedFBread" placeholder="amount" required>
  </div>

  <div>
    <label for="sauce">Thursday:</label>
    <input type="text" name="thurFBread" id="thurFBread" placeholder="amount" required>
  </div>

  <div>
    <label for="sauce">Friday:</label>
    <input type="text" name="friFBread" id="friFBread" placeholder="amount" required>
  </div>

  <div>
    <label for="sauce">Saturday:</label>
    <input type="text" name="satFBread" id="satFBread" placeholder="amount" required>
  </div>

  <div>
    <label for="sauce">Sunday:</label>
    <input type="text" name="sunFBread" id="sunFBread" placeholder="amount" required>
  </div>
  </div>

  <div class="print"><button onClick="window.print()">Print this page
</button></div>
`;
