
import './App.css';
import Post from "./components/Post.js"

const posts = [
  {
    title: "My first title",
    sub: "aaa aaa",
    body: "Lorem hello from React 1",
  },
  {
    title: "My second title",
    sub: "bbb bbb",
    body: "Lorem hello from React 2",
  },
  {
    title: "My Third title",
    sub: "ccc ccc",
    body: "Lorem hello from React 3",
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        {posts.map((item, index)=>{
          return <Post key={index} title={item.title} sub={item.sub} body={item.body} />
        })}
      </header>
    </div>
  );
}

export default App;
