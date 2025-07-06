import React, { useState } from "react";
import { Workspace } from "../../types/workspace";
import "./styles.css";

interface Props {
  setModal: (val: boolean) => void;
  data: React.Dispatch<React.SetStateAction<Workspace[]>>;
  dataAll: React.Dispatch<React.SetStateAction<Workspace[]>>;
}

import { useSnackbar } from "notistack";

const WorkspaceModal: React.FC<Props> = ({ setModal, data, dataAll }) => {
  const { enqueueSnackbar } = useSnackbar(); // ✅

  const [form, setForm] = useState<Omit<Workspace, "id">>({
    name: "",
    clientName: "",
    opponentName: "",
    caseType: "Criminal",
    areaOfLaw: "",
    timeline: "",
    actions: "⋯",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newWorkspace: Workspace = {
      id: Date.now().toString(),
      ...form,
    };
    dataAll((prev) => {
      const updated = [...prev, newWorkspace];
      localStorage.setItem("workspaces", JSON.stringify(updated)); // Optional: immediate write
      return updated;
    });
    data((prev) => [...prev, newWorkspace]);

    enqueueSnackbar("✅ Workspace created successfully!", {
      variant: "success",
      autoHideDuration: 3000,
    });
    setModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-top">
          <h2>Case Details</h2>
          <button className="close-btn" onClick={() => setModal(false)}>
            &times;
          </button>
        </div>

        <div className="input-group">
          <label htmlFor="">Workspace Name</label>
          <input
            name="name"
            placeholder="Workspace Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="">clientName</label>
          <input
            name="clientName"
            placeholder="complinent"
            value={form.clientName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="">Opponent name</label>
          <input
            name="opponentName"
            placeholder="Opponent Name"
            value={form.opponentName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="">Case Type</label>
          <select name="caseType" value={form.caseType} onChange={handleChange}>
            <option value="Criminal">Criminal</option>
            <option value="Civil">Civil</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="">Area Of Law</label>
          <input
            name="areaOfLaw"
            placeholder="Area of Law"
            value={form.areaOfLaw}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="">Timeline</label>
          <input
            name="timeline"
            placeholder="Timeline"
            value={form.timeline}
            onChange={handleChange}
          />
        </div>

        <div className="modal-actions">
          <button onClick={handleSubmit}>Save Details</button>
          <button onClick={() => setModal(false)} className="cancel-btn">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceModal;
