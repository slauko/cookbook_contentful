import {createClient} from "contentful"

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_AUTH_TOKEN,

});

function App() {
  console.log(process.env)

  return (
    <div className="App">
      Test
      {console.log(client.getEntries({
        content_type: "recipe",
      }))}
    </div>
  );
}

export default App;
