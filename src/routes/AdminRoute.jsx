import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoadingSpinner from '../shared/Navbar/LoadingSpinner'
import useRole from '../hooks/useRole'
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute

AdminRoute.propTypes = {
  children: PropTypes.element,
}