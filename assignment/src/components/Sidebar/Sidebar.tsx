import React from "react";
import {
  LayoutGrid,
  Users,
  CreditCard,
  Settings,
  MessageCircle,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Workspaces", icon: <LayoutGrid />, path: "/" },
    { name: "Team Management", icon: <Users />, path: "/team" },
    { name: "Billings & Plans", icon: <CreditCard />, path: "/billing" },
    { name: "Settings", icon: <Settings />, path: "/settings" },
    { name: "Contact Admin", icon: <MessageCircle />, path: "/contact-admin" },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">LeXi Ai</div>

      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`sidebar-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <div className="sidebar-icon">{item.icon}</div>
            <span className="sidebar-text">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="line"></div>
        <Link to="/signout" className="sidebar-item">
          <div className="sidebar-icon">
            <LogOut />
          </div>
          <span className="sidebar-text">Sign Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
