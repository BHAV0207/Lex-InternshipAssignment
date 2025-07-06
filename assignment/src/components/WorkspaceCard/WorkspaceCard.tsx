import React from "react";
import { Workspace } from "../../types/workspace";
import "./styles.css";

interface Props {
  workspace: Workspace;
}

const WorkspaceCard: React.FC<Props> = ({ workspace }) => {
  return (
    <div className="workspace-card">
      <div className="workspace-case-type">{workspace.caseType}</div>
      <h3 className="workspace-title">{workspace.name}</h3>
      <p className="workspace-subtitle">{workspace.clientName}</p>

      <div className="workspace-info">
        <p><span className="icon">📅</span> Created: May 2, 2025</p>
        <p><span className="icon">⏰</span> Last active: 2 hours ago</p>
        <p><span className="icon">✅</span> 12 documents processed</p>
      </div>

      <div className="workspace-status-tags">
        <span className="status-badge">3 Drafts</span>
        <span className="status-badge grey">1 In Review</span>
        <span className="status-badge light-grey">0 Completed</span>
      </div>

      <div className="workspace-avatars">
        <div className="avatar">JD</div>
        <div className="avatar">ML</div>
        <div className="avatar">RE</div>
        <div className="avatar extra">+2</div>
      </div>

      <hr className="divider" />

      <div className="workspace-actions">
        <button className="open-btn">Open →</button>
        <span className="dots">{workspace.actions || "⋯"}</span>
      </div>
    </div>
  );
};

export default WorkspaceCard;
