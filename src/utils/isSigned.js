import store from '../store';

export const isSigned = () => !!store.getState().sign.X_AUTH_ACCESS_TOKEN;
