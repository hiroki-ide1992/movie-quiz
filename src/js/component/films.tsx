import * as React     from 'react';
import GameProgres    from '../context/gameProgres';
import { useContext } from 'react';


const Films: React.FC = () => {
  const { film } = useContext(GameProgres);

  return(
    <div className="film">
      <ul className="film__list">
        <li className="film__listItem"><img src={`${film}`} alt=""/></li>
        <li className="film__listItem"><img src={`${film}`} alt=""/></li>
        <li className="film__listItem"><img src={`${film}`} alt=""/></li>
      </ul>
    </div>
  )
}

export default Films;