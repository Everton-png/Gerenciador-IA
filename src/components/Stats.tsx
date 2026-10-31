import { useState } from "react";
import Screen from "./Screen";
import Button from "./Button";
import type { View } from "../App";
import { IconArrowLeft } from "./icons";
import "./Stats.css";

interface StatsProps {
  onNavigate: (view: View) => void;
}

interface Result {
  media: number;
  desvio: number;
}

export default function Stats({ onNavigate }: StatsProps) {
  const [tarefa1, setTarefa1] = useState("");
  const [tarefa2, setTarefa2] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  function calcular() {
    const t1 = parseFloat(tarefa1);
    const t2 = parseFloat(tarefa2);

    if (Number.isNaN(t1) || Number.isNaN(t2)) {
      setError("Digite valores válidos nos dois campos.");
      setResult(null);
      return;
    }

    const media = (t1 + t2) / 2;
    const desvio = Math.sqrt(((t1 - media) ** 2 + (t2 - media) ** 2) / 2);

    setError(null);
    setResult({ media, desvio });
  }

  return (
    <Screen>
      <div className="stats__form">
        <label className="stats__field">
          <span className="stats__label">Tempo da primeira tarefa</span>
          <input
            className="stats__input"
            type="number"
            step="any"
            placeholder="00"
            value={tarefa1}
            onChange={(e) => setTarefa1(e.target.value)}
          />
        </label>

        <label className="stats__field">
          <span className="stats__label">Tempo da segunda tarefa</span>
          <input
            className="stats__input"
            type="number"
            step="any"
            placeholder="00"
            value={tarefa2}
            onChange={(e) => setTarefa2(e.target.value)}
          />
        </label>
      </div>

      <Button onClick={calcular}>Calcular</Button>

      {error && <p className="stats__error">{error}</p>}

      {result && (
        <div className="stats__result">
          <div className="stats__result-row">
            <span>Tempo médio</span>
            <strong>{result.media.toFixed(2)}</strong>
          </div>
          <div className="stats__result-row">
            <span>Desvio padrão</span>
            <strong>{result.desvio.toFixed(2)}</strong>
          </div>
        </div>
      )}

      <Button variant="outline" onClick={() => onNavigate("menu")}>
        <IconArrowLeft /> Voltar
      </Button>
    </Screen>
  );
}
