import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [data, setDate] = useState();
  useEffect(() => {
    if (title.length === 1) {
      const handle = setTimeout(() => {
        fetch(`https://reqres.in/api/users?page=${title}`)
          .then((stream) => stream.json())
          .then((result) => setDate(result.data));
      }, 1000);
      return () => {
        clearTimeout(handle);
      };
    }
  }, [title]);
  let dat = "";
  if (data !== undefined) {
    dat = data;
  }
  return (
    <div className="App">
      <input
        type="text"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <h4>{JSON.stringify(dat)}</h4>
    </div>
  );
}

export default App;
