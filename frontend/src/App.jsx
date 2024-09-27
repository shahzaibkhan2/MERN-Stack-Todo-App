import { Toaster } from "sonner";
import Header from "./components/headers/Header";
import TodoForm from "./components/todos/TodoForm";
import TodosContextProvider from "./context/todosContext";
import TodosFeed from "./components/todos/TodosFeed";
import MiniHeader from "./components/headers/MiniHeader";
import FiltersNav from "./components/filters/FiltersNav";

// Main App
const App = () => {
  return (
    <TodosContextProvider>
      <Toaster />
      <main className="w-full px-2 smallOne:w-2/3 smallOne:mx-auto my-12">
        <Header />
        <TodoForm />
        <FiltersNav />
        <MiniHeader />
        <TodosFeed />
      </main>
    </TodosContextProvider>
  );
};

export default App;
