import { useState } from 'react';
import {
  StyledDisclosure,
  StyledDisclosureButton,
  StyledDisclosurePanel,
  ArrowIcon
} from './index';

interface ICustomDisclosure {
  children: React.ReactNode;
  title: string;
  tag: string;
}

function CustomDisclosure(props: ICustomDisclosure) {
  const { children, title, tag } = props;
  const [openPanel, setOpenPanel] = useState(false);

  const togglePanelHandler = () => {
    setOpenPanel(!openPanel);
  };

  return (
    <StyledDisclosure tag={tag}>
      <StyledDisclosureButton onClick={togglePanelHandler}>
        {title} <ArrowIcon open={openPanel} />
      </StyledDisclosureButton>

      <StyledDisclosurePanel>{children}</StyledDisclosurePanel>
    </StyledDisclosure>
  );
}

export default CustomDisclosure;
