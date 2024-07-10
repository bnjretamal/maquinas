import React from 'react';
import Whatsapp from '../../assets/whatsapp (1).png';

const Buttonwsp = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <a href="https://api.whatsapp.com/send?phone=56934255664"> <button className="rounded-full p-5"><img className='w-20 h-auto'  src={Whatsapp}alt="/" /></button>  </a>
      
    </div>
  )
}

export default Buttonwsp
