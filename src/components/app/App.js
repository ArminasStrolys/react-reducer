import { useGlobalContext } from "../context/LikeContext";

function App() {
const {likes, setLike, removeLike} = useGlobalContext()
  return (
    <div className="App">
      Test
      <p>Likes: {likes}</p>
      <button onClick={setLike}>[+]</button>
      <button onClick={removeLike}>[-]</button>
    </div>
  );
}

export default App;
