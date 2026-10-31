import Screen from "./Screen";
import Button from "./Button";
import type { View } from "../App";
import { IconShuffle, IconClock, IconChart } from "./icons";
import "./Menu.css";

interface MenuProps {
  onNavigate: (view: View) => void;
}

export default function Menu({ onNavigate }: MenuProps) {
  return (
    <Screen>
      <div className="menu__brand">
        <h1 className="menu__title">
          BCM
          <br />
          Manager
        </h1>
        <p className="menu__subtitle">Organize seu tempo, uma tarefa por vez</p>
      </div>

      <div className="menu__actions">
        <Button onClick={() => onNavigate("sugestao")}>
          <IconShuffle /> Tarefas Aleatórias
        </Button>
        <Button onClick={() => onNavigate("cronometro")}>
          <IconClock /> Cronômetro
        </Button>
        <Button onClick={() => onNavigate("estatisticas")}>
          <IconChart /> Estatísticas
        </Button>
      </div>
    </Screen>
  );
}
