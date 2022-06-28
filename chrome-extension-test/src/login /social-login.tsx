import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Social = () => {

    // Not required for the test
    // const google = () => {
    //     window.open("http://localhost:5001/auth/google", "_self")
    // }

    const [auth, setAuth] = useState(false);
  
    return (

        <div className="pb-2 border-b border-dashed border-slate-300">            
        <h3 className='text-sm mb-2'>Sign in with...</h3>

          <div className='flex justify-evenly mb-2'>
            <button className='transition-all bg-blue-500 text-left px-2 py-1 rounded-full text-white hover:bg-slate-200 hover:text-blue-500' onClick={() => {setAuth(!auth)}}>
              <FontAwesomeIcon icon={faFacebook}/>
            </button>

            <button className='transition-all bg-red-500 text-left px-2 py-1 rounded-full text-white hover:bg-slate-200 hover:text-red-500' onClick={() => {setAuth(!auth)}}>
              <FontAwesomeIcon icon={faGoogle} />
            </button>

            <button className='transition-all bg-sky-500 text-left px-2 py-1 rounded-full text-white hover:bg-slate-200 hover:text-sky-500' onClick={() => {setAuth(!auth)}}> 
              <FontAwesomeIcon icon={faTwitter} />
            </button>

            <button className='transition-all bg-zinc-800 text-left px-2 py-1 rounded-full text-white hover:bg-slate-200 hover:text-zinc-800' onClick={() => {setAuth(!auth)}}>
              <FontAwesomeIcon icon={faGithub} />
            </button>

            <button className='transition-all bg-indigo-500 text-left px-2 py-1 rounded-full text-white hover:bg-slate-200 hover:text-indigo-500' onClick={() => {setAuth(!auth)}}>
              <FontAwesomeIcon icon={faTiktok} />
            </button>

          </div>

          {auth ? <div className='container bg-green-500 text-white text-sm rounded-md px-3 py-2'><p>Here's where the Auth magic would happen!</p></div> : "" }

      </div>

  )
}

export default Social
