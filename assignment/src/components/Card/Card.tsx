import { LucideIcon } from "lucide-react";
import React from "react";
import "./styles.css";

interface CardProps {
  title?: string;
  Icon?: LucideIcon;
  count?: number;
  flag?: number;
  text: string;
}

function Card(props: CardProps) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div >
          <h3 className="card-title">{props.title}</h3>
        </div>
        <div>{props.Icon && <props.Icon className="card-icon" />}</div>
      </div>
      <div>{props.count}</div>
      <div
        className={`${
          props.flag === 1
            ? "card-text-green"
            : props.flag === -1
            ? "card-text-red"
            : ""
        }`}
      >
        {props.text}
      </div>
    </div>
  );
}

export default Card;
