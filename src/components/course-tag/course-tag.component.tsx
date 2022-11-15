import React from 'react';
import { Difficulty, StackCategories } from '../../interfaces/api';
import { tagMapper } from '../../utils';
import { CourseTagContainer } from './index';

interface ICourseTag {
  children: React.ReactNode;
  title: string;
}

function CourseTag(props: ICourseTag) {
  const { children, title, ...otherProps } = props;

  return (
    <CourseTagContainer title={title} {...otherProps}>
      {tagMapper(children as Difficulty | StackCategories)}
    </CourseTagContainer>
  );
}

export default CourseTag;
