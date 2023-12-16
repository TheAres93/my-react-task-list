import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import TasksList from "../pages/TasksList";
import AddTasks from "../pages/AddTasks";
import NotFound from "../pages/NotFound";

export default function AppRouter() {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/AddTasks" element={<AddTasks />} />
      <Route path="/TasksList">
        <Route index element={<TasksList action="All" />} />
        <Route path="/TasksList/Complete" element={<TasksList action="Complete" />} />
        <Route path="/TasksList/Incomplete" element={<TasksList action="Incomplete" />} />
        <Route path="/TasksList/EditOn" element={<TasksList action="EditOn" />} />
      </Route>
    </Routes>
  );
}
