import Image1 from '../../assets/images/illustration-1.svg';
import Image2 from '../../assets/images/illustration-2.svg';
import { orangeBooks } from '../../mock-data/courses';
import { SwiperSlide } from 'swiper/react';
import { CoursePresentation } from '../../components/course-presentation';
import { Carrossel } from '../../components/carrossel';
import {
  IndexContainer,
  CommonSection,
  TextContainer,
  Title,
  CarrosselTitle,
  Text,
  Illustration,
  Emphasis,
  CarrosselSection
} from './index';

function Index() {
  return (
    <IndexContainer>
      <CommonSection>
        <Illustration src={Image2} />

        <TextContainer>
          <Title>Orange Book</Title>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            eget velit aliquet sagittis id. Platea dictumst vestibulum rhoncus
            est pellentesque elit ullamcorper.
          </Text>

          <Emphasis>Escreva a sua história!</Emphasis>
        </TextContainer>
      </CommonSection>

      <CommonSection id="about">
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

      <CarrosselSection id="courses">
        <CarrosselTitle>Conheça nossas trilhas</CarrosselTitle>

        <Carrossel>
          {orangeBooks.map((course: any) => (
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
