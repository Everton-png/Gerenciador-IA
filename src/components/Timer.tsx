import Screen from "./Screen";
import Button from "./Button";
import type { View } from "../App";
import { formatTime, useStopwatch } from "../hooks/useStopwatch";
import { IconPlay, IconPause, IconRotate, IconArrowLeft } from "./icons";
import "./Timer.css";

interface TimerProps {
  onNavigate: (view: View) => void;
}

export default function Timer({ onNavigate }: TimerProps) {
  const { elapsedSeconds, isRunning, start, pause, reset } = useStopwatch();

  return (
    <Screen>
      <div className="timer__ring-wrap">
        <div className={`timer__ring ${isRunning ? "is-running" : ""}`}>
          <span className="timer__display">{formatTime(elapsedSeconds)}</span>
        </div>
      </div>

      <div className="menu__actions">
        {!isRunning ? (
          <Button onClick={start}>
            <IconPlay /> Iniciar
          </Button>
        ) : (
          <Button onClick={pause}>
            <IconPause /> Pausar
          </Button>
        )}
        <Button variant="outline" onClick={reset}>
          <IconRotate /> Reiniciar
        </Button>
        <Button variant="outline" onClick={() => onNavigate("menu")}>
          <IconArrowLeft /> Voltar
        </Button>
      </div>
    </Screen>
  );
}
