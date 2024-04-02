import { Route, Routes} from 'react-router-dom';
import './Pages.scss';
import { User } from '../User/User';

export const Pages = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path='/' element={<User />} />
      </Routes>
    </div>
  )
}