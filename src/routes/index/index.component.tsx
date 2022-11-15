import Image1 from '../../assets/images/illustration-1.svg';
import Image2 from '../../assets/images/illustration-2.svg';
import { SwiperSlide } from 'swiper/react';
import { CoursePresentation } from '../../components/course-presentation';
import { Carrossel } from '../../components/carrossel';
import {
  CarrosselSection,
  CarrosselTitle,
  CommonSection,
  Emphasis,
  Illustration,
  IndexContainer,
  Text,
  TextContainer,
  Title
} from './index';
import { useDispatch, useSelector } from 'react-redux';
import { selectOriginals, setAvailableCourses } from '../../redux/reducers';
import { useEffect } from 'react';
import { api } from '../../lib/axios';
import { CourseDTO } from '../../interfaces/api';

function Index() {
  const dispatch = useDispatch();
  const originals = useSelector(selectOriginals);

  useEffect(() => {
    fetchAvailableCourses();
  }, []);

  async function fetchAvailableCourses() {
    try {
      const response = await api.get<CourseDTO[]>('/courses/all');

      dispatch(setAvailableCourses(response.data));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <IndexContainer>
      <CommonSection>
        <Illustration src={Image2} />

        <TextContainer>
          <Title>Orange Book</Title>

          <Text>
            Venha conhecer nossos cursos de estudos, caso não ache o que precise se conecte com alguém da comunidade e
            aprenda para você também criar sua trilha.
          </Text>

          <Emphasis>Escreva a sua história!</Emphasis>
        </TextContainer>
      </CommonSection>

      <CommonSection id='about'>
        <TextContainer>
          <Title>O que é a Orange Book?</Title>

          <Text>
            A Orange Book é uma plataforma de estudos feita para conectar você e
            as trilhas da sua escolha. Aqui você pode escrever a sua historia de
            uma forma prática e fácil, além disso a organização das trilhas
            fazem total difetença na hora de aprender.
          </Text>
        </TextContainer>

        <Illustration src={Image1} />
      </CommonSection>

      <CarrosselSection id='courses'>
        <CarrosselTitle>Conheça nossas trilhas</CarrosselTitle>

        <Carrossel>
          {originals.map((course: any) => (
            <SwiperSlide key={course.title}>
              <CoursePresentation {...course} />
            </SwiperSlide>
          ))}
        </Carrossel>
      </CarrosselSection>
    </IndexContainer>
  );
}

export default Index;
