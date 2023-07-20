import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../store/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);
  return (
    <div>
      <h1>{greeting.data?.text}</h1>
    </div>
  );
};

export default Greetings;
