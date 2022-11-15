import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react';
import {
  FooterContainer,
  Socials,
  StyledLink,
  Paragraph,
  Emphasis
} from './index';

function Footer() {
  return (
    <FooterContainer>
      <Socials>
        <StyledLink to="#">
          <FacebookLogo size={32} weight="bold" />
        </StyledLink>

        <StyledLink to="#">
          <InstagramLogo size={32} weight="bold" />
        </StyledLink>

        <StyledLink to="#">
          <TwitterLogo size={32} weight="bold" />
        </StyledLink>

        <StyledLink to="#">
          <LinkedinLogo size={32} weight="bold" />
        </StyledLink>
      </Socials>

      <Paragraph>
        Feito pela equipe da <Emphasis>Orange Book</Emphasis> para a comunidade.
      </Paragraph>
    </FooterContainer>
  );
}

export default Footer;
