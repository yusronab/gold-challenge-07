import LoadingSpinner from '../components/LoadingSpinner';
import HomeAdmin from './HomeAdmin';
import HomeUser from './HomeUser';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionCurrentUser } from '../actions/UserAction';

function App() {
  const dispatch = useDispatch()

  const token = localStorage.getItem("token")

  const { currentUserData } = useSelector((state) => state.UserReducer)

  useEffect(() => {

    dispatch(actionCurrentUser(token))

  }, [dispatch, token])

  return (
    <div className="home-page">
      {currentUserData ? (
        currentUserData.role === "member" ?
        <HomeUser /> : <HomeAdmin />
      ) : <LoadingSpinner />}
    </div >
  );
}

export default App;
