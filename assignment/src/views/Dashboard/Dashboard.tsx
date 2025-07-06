import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import {
  Users,
  CreditCard,
  FileText,
  Settings,
  BarChart3,
  Grid,
  LayoutGrid,
  List,
} from "lucide-react";
import Card from "../../components/Card/Card";
import "./styles.css";
import { defaultWorkspace, Workspace } from "../../types/workspace";
import WorkspaceCard from "../../components/WorkspaceCard/WorkspaceCard";

function Dashboard() {
  const cardData = [
    {
      title: "Total WorkSpaces",
      Icon: Users,
      count: 12,
      flag: 1,
      text: "Up 8% from last month",
    },
    {
      title: "Total Signed Contracts",
      Icon: CreditCard,
      count: 5,
      flag: 0,
      text: "No change",
    },
    {
      title: "Contacts Drafted",
      Icon: FileText,
      count: 34,
      flag: -1,
      text: "Down 5%",
    },
    {
      title: "Contacts Reviewed",
      Icon: Settings,
      count: 3,
      flag: 1,
      text: "Updated recently",
    },
    {
      title: "Contracts Translated",
      Icon: BarChart3,
      count: 18,
      flag: -1,
      text: "Down 2.3%",
    },
  ];

  const [workspaceData, setWorkspaceData] = useState<Workspace[]>([
    defaultWorkspace,
  ]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <Nav></Nav>
      </div>
      <div className="dashboard-body">
        <div className="dashboard-overview">
          <div className="dashboard-overview-header">
            <h1>Dashboard Overview</h1>
          </div>
          <div className="dashboard-overview-content">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                Icon={card.Icon}
                count={card.count}
                flag={card.flag}
                text={card.text}
              />
            ))}
          </div>
        </div>

        <div className="dashboard-workspaces">
          <div className="workspace-header">
            <h2>Workspaces</h2>
            <div className="workspace-view-toggle">
              <button className="view-btn active">
                {" "}
                <LayoutGrid size={13}></LayoutGrid>
                <span> Grid</span>
              </button>
              <button className="view-btn">
                <List size={13}></List> <span>List</span>{" "}
              </button>
            </div>
          </div>

          <div className="workspace-tabs">
            <span className="tab">Contracts</span>
            <span className="tab active">Litigation</span>
          </div>

          <div className="workspace-controls">
            <input
              type="text"
              placeholder="Search by Workspace Name / Client Name"
              className="search-input"
            />
            <select className="select-filter">
              <option>All Types</option>
            </select>
            <select className="select-filter">
              <option>All Status</option>
            </select>
            <button className="create-btn">+ Create New Workspace</button>
          </div>

          <div className="workspace-table">
            <table>
              <thead>
                <tr>
                  <th>Workspace Name</th>
                  <th>Client</th>
                  <th>Opponent</th>
                  <th>Case</th>
                  <th>Area of Law</th>
                  <th>Timeline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {workspaceData.map((ws) => (
                  <tr key={ws.id}>
                    <td>{ws.name}</td>
                    <td>{ws.clientName}</td>
                    <td>{ws.opponentName}</td>
                    <td>
                      <span className="badge-blue">{ws.caseType}</span>
                    </td>
                    <td>{ws.areaOfLaw}</td>
                    <td>
                      <span className="badge-grey">{ws.timeline}</span>
                    </td>
                    <td>
                      <span className="dots">{ws.actions || "⋯"}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="workspace-cards-grid">
              {workspaceData.map((ws) => (
                <WorkspaceCard key={ws.id} workspace={ws} />
              ))}
            </div> */}

            <div className="upgrade-banner">
              <span className="icon">📥</span>
              <span>Upgrade to add more litigation cases to the workspace</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
