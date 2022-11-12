import {
  AdminDashboardContainer,
  DashboardFilterBar,
  DashboardListContainer,
  DashboardPanel,
  LessonEditDashboardContainer,
  LessonEditDashboardForm
} from '.';
import { Listbox } from '@headlessui/react';
import {
  ListboxButtonStyled,
  ListboxOptionsStyled,
  ListboxOptionStyled
} from '../../components/create-pannel/course-edit-dashboard';
import { useState } from 'react';
import { ContentType } from '../../interfaces/api';
import { tagMapper } from '../../utils';

const contents: ContentType[] = [
  'VIDEO',
  'ARTICLE',
  'COURSE',
  'BOOK'
];

function AdminDashboard() {
  const [contentType, setContentType] =
    useState<ContentType>('VIDEO');

  return (
    <AdminDashboardContainer>
      <DashboardPanel>
        <DashboardFilterBar>
          <div>
            <input />
          </div>
          <div>filtros</div>
        </DashboardFilterBar>

        <DashboardListContainer>

        </DashboardListContainer>
      </DashboardPanel>

      <LessonEditDashboardContainer>
        <LessonEditDashboardForm>
          <p>Título</p>
          <input type='text' />
          <p>Tipo de conteúdo</p>
          <Listbox value={contentType} onChange={setContentType}>
            <ListboxButtonStyled>{tagMapper(contentType)}</ListboxButtonStyled>
            <ListboxOptionsStyled>
              {contents.map((content, index) => (
                <Listbox.Option as='div' key={index} value={content}>
                  <ListboxOptionStyled>{tagMapper(content)}</ListboxOptionStyled>
                </Listbox.Option>
              ))}
            </ListboxOptionsStyled>
          </Listbox>
          <p>Autor</p>
          <input type='text' />
          <p>Tópico</p>
          <input type='text' />
          <p>Descrição</p>
          <textarea />
          <p>Link</p>
          <input type='url' />
          <p>Duração</p>
          <input type='text' />
          <button>submit</button>
        </LessonEditDashboardForm>
      </LessonEditDashboardContainer>
    </AdminDashboardContainer>
  );
}

export default AdminDashboard;