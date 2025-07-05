import React from "react";
import Nav from "../../components/Nav/Nav";
import { Users, CreditCard, FileText, Settings, BarChart3 } from "lucide-react";
import Card from "../../components/Card/Card";
import "./styles.css";

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

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
