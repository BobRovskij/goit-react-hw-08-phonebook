import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Authorized } from 'components/Authorized/Authorized';
import { NotAuthorized } from 'components/NotAuthorized/NotAuthorized';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{isLoggedIn ? <Authorized /> : <NotAuthorized />}</>;
};

export default Home;
