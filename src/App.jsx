import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Nikkita" animal="Cat" breed="Maine Coon" />,
      <Pet name="Felix" animal="Cat" breed="Black White" />,
      <Pet name="Luna" animal="Dog" breed="Havanese" />,
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />,
      <Pet name="Doink" animal="Cat" breed="Mixed" />, */}
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
