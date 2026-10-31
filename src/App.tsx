import { useState } from "react";
import Menu from "./components/Menu";
import Suggestion from "./components/Suggestion";
import Timer from "./components/Timer";
import Stats from "./components/Stats";

export type View = "menu" | "sugestao" | "cronometro" | "estatisticas";

function App() {
  const [view, setView] = useState<View>("menu");

  switch (view) {
    case "sugestao":
      return <Suggestion key={view} onNavigate={setView} />;
    case "cronometro":
      return <Timer key={view} onNavigate={setView} />;
    case "estatisticas":
      return <Stats key={view} onNavigate={setView} />;
    default:
      return <Menu key={view} onNavigate={setView} />;
  }
}

export default App;
