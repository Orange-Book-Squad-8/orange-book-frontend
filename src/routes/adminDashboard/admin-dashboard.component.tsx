import { useContext, useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { CourseEditDashboard } from "../../components/create-pannel/course-edit-dashboard";
import { DashboardList } from "../../components/create-pannel/dashboard-list";
import { ItemCard } from "../../components/create-pannel/item-card";
import { SectionPannel } from "../../components/create-pannel/section-pannel";
import { Lesson, Section } from "../../interfaces/api";
import { getLesson, getSection } from "../../mock-data/mockCourse";
import { selectSectionList, setSectionList } from "../../redux/reducers/courseManager";
import { AdminDashboardContainer, DashboardFilterBar, DashboardInfo, DashbordPannel } from "./admin-dashboard.styles";


interface cardItemProps{
  type: string,
  lessonId: number,
  listIndex: number
  listLastId: number
}

function AdminDashboard() {
  const dispatch = useDispatch();

  const list: Lesson[] = getLesson(25);
  const section: Section[] = getSection(5, list)

  dispatch(setSectionList(section))
  return (
    <AdminDashboardContainer>

      <DashbordPannel>
        
        <DashboardFilterBar>
          <div><input /></div>
          <div>filtros</div>
        </DashboardFilterBar>

        <DashboardList />
      </DashbordPannel>

      <CourseEditDashboard />
    
    </AdminDashboardContainer>
  );
}

export default AdminDashboard