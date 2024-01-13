import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from '../Pages';

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);
export default AppRouter;
