import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("item1"), new Todo("item2")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
