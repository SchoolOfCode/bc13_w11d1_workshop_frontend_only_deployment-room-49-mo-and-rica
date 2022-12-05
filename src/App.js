import "./App.css";

// function handleSubmit(){
//   console.log("you've submitted")
// }

// function handleChange() {
//   console.log("you've changed");
// }

function App() {
  return (
    <div className="App">
      <h1> Hello World! Hello</h1>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      {/* <form
        data-netlify="true"
        name="pizzaOrder"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="pizzaOrder" />
        <label>
          What order did the pizza give to the pineapple?
          <input name="order" type="text" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form> */}
    </div>
  );
}

export default App;
