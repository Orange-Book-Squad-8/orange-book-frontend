import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/reducers';
import { StyledToggler } from './index';

interface IToggler {
  onChange?: React.ChangeEventHandler;
}

function Toggler(props: IToggler) {
  const { onChange } = props;
  const { current } = useSelector(selectTheme);

  return <StyledToggler checked={current === 'light'} onChange={onChange} />;
}

export default Toggler;
