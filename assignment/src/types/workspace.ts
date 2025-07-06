export type Workspace = {
  id: string;
  name: string;
  clientName: string;
  opponentName: string;
  caseType: string; // e.g., "Criminal", "Civil"
  areaOfLaw: string; // e.g., "Jalandar"
  timeline: string; // e.g., "First hearing done"
  actions?: string; // e.g., "⋯" for more options
};


export const defaultWorkspace: Workspace = {
  id: "1",
  name: "Morgan Acquisition",
  clientName: "Sarah Chen",
  opponentName: "Chen Sarah",
  caseType: "Criminal",
  areaOfLaw: "Jalandar",
  timeline: "First hearing done",
  actions: "⋯",
};