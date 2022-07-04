
function App() {
  // let link= "" paste your getform.io link here
  return (
    <div className="App">
      <form method="POST" action= {link}>
        <input type="text" name="name" placeholder="name"/>
        <input type="text" name="email" placeholder="e-mail"/>
        <input type="text" name="message" placeholder="message"/>


        <button type="submit">submit</button>


      </form>
    </div>
  );
}

export default App;
