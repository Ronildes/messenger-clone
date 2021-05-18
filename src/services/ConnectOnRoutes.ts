import axios from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import tough from 'tough-cookie';

function connectOnRoutes() {
  axiosCookieJarSupport(axios);

  const cookieJar = new tough.CookieJar();

  const app = axios.create({
    baseURL: 'http://localhost:3000',
    jar: cookieJar,
    withCredentials: true,
  });

  return { app };
}
export default connectOnRoutes;
