import * as React    from 'react';
import * as ReactDOM from 'react-dom';
import ToPlay        from '../component/toPlay';
import lead          from '../../img/top/lead.png';
import { useState, useEffect} from 'react';

const Top = () => {

  const [modal, setModal] = useState('');

  return(
    <div className="top">
      <ToPlay isOpen={modal} close={setModal} />
      <div className="top__inner">
        <h1 className="top__h1"><img src={lead} alt="ドラえもんクイズおれの挑戦状"/></h1>

        <div className="top__btnBox">
          <a className="btn01" href="./game.html">はじめる</a>
        </div>
        <div className="top__btnBox">
          <div className="btn01" onClick={() => setModal('view')}>あそびかた</div>
        </div>
      </div>
		</div>
  )
}

ReactDOM.render(<Top />, document.querySelector('#top'));