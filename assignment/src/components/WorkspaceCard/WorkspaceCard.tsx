// components/WorkspaceCard.tsx
import React from "react";
import { Workspace } from "../../types/workspace";
import "./styles.css"; // Assuming you have styles for the workspace card

interface Props {
  workspace: Workspace;
}

const WorkspaceCard: React.FC<Props> = ({ workspace }) => {
  return (
    <div className="workspace-card">
      <h3 className="workspace-title">{workspace.name}</h3>
      <p>
        <strong>Client:</strong> {workspace.clientName}
      </p>
      <p>
        <strong>Opponent:</strong> {workspace.opponentName}
      </p>
      <p>
        <strong>Case Type:</strong>{" "}
        <span className="badge-blue">{workspace.caseType}</span>
      </p>
      <p>
        <strong>Area of Law:</strong> {workspace.areaOfLaw}
      </p>
      <p>
        <strong>Timeline:</strong>{" "}
        <span className="badge-grey">{workspace.timeline}</span>
      </p>
      <div className="card-actions">{workspace.actions || "⋯"}</div>
    </div>
  );
};

export default WorkspaceCard;
