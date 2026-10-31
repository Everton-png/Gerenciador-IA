import type { ReactNode } from "react";
import "./Screen.css";

interface ScreenProps {
  children: ReactNode;
}

export default function Screen({ children }: ScreenProps) {
  return (
    <div className="screen">
      <div className="screen__card">{children}</div>
      <footer className="screen__footer">
        ©2026 BCM — Todos os direitos reservados
      </footer>
    </div>
  );
}
