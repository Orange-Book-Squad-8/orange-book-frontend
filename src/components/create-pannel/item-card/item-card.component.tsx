import { Lesson, Section } from "../../../interfaces/api";
import { DashboardIten } from "./item-card.styles";
import { useDrag, useDrop } from "react-dnd";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveLesson, selectSectionList, setSectionList } from "../../../redux/reducers/courseManager";

interface cardItemProps{
  type: string,
  id: number,
  listIndex: number,
  lessonLocation: number
}

interface XYCoord {
    x: number;
    y: number;
}

interface itemCardProps {
  lesson: Lesson,
  listIndex: number,
  lessonLocation: number
}

function ItemCard({lesson, listIndex, lessonLocation}: itemCardProps) {
  const {title} = lesson
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  
  const [{ isDragging }, dragRef] = useDrag({
    item: {type: "CARD", listIndex, lessonLocation} as cardItemProps,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    type: 'CARD'
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: cardItemProps, monitor) {
      const draggedListIndex = item.lessonLocation;
      const targetListIndex = lessonLocation;

      const draggedIndex = item.listIndex;
      const targetIndex = listIndex;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      if(ref.current === null) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset() as XYCoord;
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      dispatch(moveLesson({
        moveFrom: item.lessonLocation,
        moveTo: lessonLocation,
        prevIndex: item.listIndex,
        newIndex: listIndex
      }))

      item.listIndex = targetIndex;
      item.lessonLocation = targetListIndex;
    }
  })

  dragRef(dropRef(ref));
      
  return (
    <DashboardIten ref={ref} isDragging={isDragging}>
      <div>
        {
            title
        }
      </div>
      <div>  -  </div>
      <div>
        {
           listIndex 
        }
      </div>
    </DashboardIten>
  );
}

export default ItemCard