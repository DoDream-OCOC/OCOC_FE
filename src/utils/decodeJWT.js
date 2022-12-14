import jwtDecode from 'jwt-decode';
export const decodeJWT = jwt => jwtDecode(jwt);
