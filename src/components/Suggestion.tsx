import { useState } from "react";
import Screen from "./Screen";
import Button from "./Button";
import type { View } from "../App";
import { IconShuffle, IconArrowLeft } from "./icons";
import "./Suggestion.css";

interface SuggestionProps {
  onNavigate: (view: View) => void;
}

const SUGGESTIONS = [
  "Organize sua mesa de trabalho por 10 minutos.",
  "Beba um copo de água e faça um alongamento.",
  "Liste as 3 tarefas mais importantes do dia.",
  "Responda os e-mails pendentes.",
  "Faça uma pausa de 5 minutos longe da tela.",
  "Revise sua agenda para amanhã.",
  "Leia um artigo relacionado à sua área.",
  "Arrume um arquivo ou pasta bagunçada.",
  "Envie uma mensagem de agradecimento a alguém.",
  "Anote uma ideia nova que você teve hoje.",
];

export default function Suggestion({ onNavigate }: SuggestionProps) {
  const [current, setCurrent] = useState<string | null>(null);

  function pickSuggestion() {
    const next = SUGGESTIONS[Math.floor(Math.random() * SUGGESTIONS.length)];
    setCurrent(next);
  }

  return (
    <Screen>
      <div className="suggestion__display">
        <IconShuffle className="suggestion__icon" />
        <p className="suggestion__text">
          {current ?? "Pressione para receber uma sugestão do dia"}
        </p>
      </div>

      <div className="menu__actions">
        <Button onClick={pickSuggestion}>
          <IconShuffle /> Nova sugestão
        </Button>
        <Button variant="outline" onClick={() => onNavigate("menu")}>
          <IconArrowLeft /> Voltar
        </Button>
      </div>
    </Screen>
  );
}
