import { useDispatch, useSelector } from "react-redux"
import { Lesson } from "../../../interfaces/api"
import { moveLesson, selectSectionList } from "../../../redux/reducers/courseManager"
import { ItemCard } from "../item-card"
import { useDrop } from "react-dnd";
import { DashboardListContainer } from "./dashboard-list.styles"

interface cardItemProps{
    type: string,
    id: number,
    listIndex: number,
    lessonLocation: number
  }

function DashboardList(){
    const dispatch = useDispatch();
    const lessonList = useSelector(selectSectionList)

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item: cardItemProps, monitor) {
          if (item.lessonLocation === 0) return;
          
          dispatch(moveLesson({
            moveFrom: item.lessonLocation,
            moveTo: 0,
            prevIndex: item.listIndex,
            newIndex: lessonList[0].lessons.length
          }))
    
          item.listIndex = lessonList[0].lessons.length;
          item.lessonLocation = 0;
        }
      })

    return(
        <DashboardListContainer ref={dropRef}>
            {
              lessonList[0].lessons.map(
                (lesson: Lesson, index: number) => (<ItemCard lesson={lesson} listIndex={index} lessonLocation={0} key={index}/>)
            )
          }
        </DashboardListContainer>
    )
}

export default DashboardList