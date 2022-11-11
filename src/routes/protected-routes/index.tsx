import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Role } from '../../interfaces/api';
import { selectRole } from '../../redux/reducers/user';

interface ProtectedRoutesProps {
  authRole: Role[];
  children: JSX.Element;
}

export function ProtectedRoutes({ authRole, children }: ProtectedRoutesProps) {
  const userRole: Role = useSelector(selectRole);
  return authRole.includes(userRole) ? (
    children
  ) : (
    <Navigate to="/register" replace />
  );
}
