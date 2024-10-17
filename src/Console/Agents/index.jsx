import { Routes, Route, Navigate } from "react-router-dom";
import Agents from "./List";
import SingleAgent from "./Single";
const AgentsIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Agents />} />
      <Route path="/:agentId/*" element={<SingleAgent />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AgentsIndex;
