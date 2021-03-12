import html from "html-literal";
import bread from "../../img/Bread.jpg";
export default () => html`
<img src= "${bread}" />


<header id="contact">Contact Us</header>


<form action="https://formspree.io/f/mpzogzrn"method="POST">
<label for="name">Name:</label>
<input type="text" name="name" id="name" placeholder="Full Name" />
<label for="email">Email</label>
<input type="email" name="email" id="email" placeholder="you@somewhere.com">
<label for="fone">Phone:</label>
<input type="tel" name="fone" id="fone" />

<div>
<label for="msg">Enter your message:</label>
<textarea name="msg" id="msg" cols="30" rows="10"></textarea>
</div>
<input type="submit" value="Submit" />
`;
