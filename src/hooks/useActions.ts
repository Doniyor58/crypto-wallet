import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { applicationActions, userActions } from '../redux';

export const useActions = () => {
  const dispatch = useDispatch();

  const allActions = {
    ...userActions,
    ...applicationActions,
  };

  return bindActionCreators(allActions, dispatch);
};
