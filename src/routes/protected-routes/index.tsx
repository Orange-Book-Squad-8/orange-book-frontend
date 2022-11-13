import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Role } from '../../interfaces/api';
import { selectRole } from '../../redux/reducers';

interface ProtectedRoutesProps {
  authRole: string[];
  children: JSX.Element;
}

export function ProtectedRoutes({ authRole, children }: ProtectedRoutesProps) {
  const userRole: Role = useSelector(selectRole);

  return authRole.includes(userRole?.name) ? (
    children
  ) : (
    <Navigate to='/register' state={{ prevPath: location.pathname }} />
  );
}
