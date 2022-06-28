import { useEffect, useState } from 'react';
import ProfileImage from '../sam-burch.jpeg';
import AreYouLost from './are-you-lost';

interface Props {
    Logout: any;
    user: any;
}

const Profile = ( { Logout, user } : Props ) => {

    // Keep track of whether the modal should be shown or not
    const [show, setShow] = useState(false);

    // Record inactivity
    const handleInactive = () => {
        let time: number = 5000

        // Only show the modal if it's currently not shown
        const showHideModal = () => ((!show) ? setShow(true) : !show)
    
        // Reset timer
        const resetTimer = () => {
            clearTimeout(time)
            time = setTimeout(showHideModal, 5000)
        }
        
        // Reset timer if mouse movement or key press occurs
        document.onmousemove = resetTimer
        document.onkeydown = resetTimer
    }

    // Run on component render
    useEffect(() => {
        // Run handle function component when mounted
        handleInactive()
        
    }, [show])

  return (
        <div className='w-full grid relative'>
            {(show) ? <AreYouLost setShow={setShow} user={user}/> : ""}
        <div className={"block text-center mt-2 transition ease-in-out " + ((show === true) ? "blur-lg" : "")}>
        <img className='block mx-auto w-32 h-32 bg-slate-300 rounded-full' src={ProfileImage} alt='User profile image' />
        <h2 className='text-lg py-4'>&#128075; Hi <span>{user.name}</span></h2>
        <button
            className='text-sm transition-all bg-slate-400 hover:bg-slate-200 px-8 py-2 rounded-full'
            onClick={Logout}>
            Logout
        </button>
        </div>
    </div>
    )
}

export default Profile