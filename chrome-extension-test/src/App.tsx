import { useEffect, useState } from 'react';
import LoginForm from './login /login-form';
import Profile from './login /profile';
import Social from './login /social-login';
import popupIcon from './images/icon-128.png';
import './App.css';

type userDetails = {
  name: string;
  password: string;
}

const App: React.FC = () => {

  // Hardcode user details password to password
  const userDetails = {
    name: "",
    password: "password"
  }

  // Initialise user object to empty strings. 
  // Password is optional string as it has to match "Password".
  const [user, setUser] = useState<{name: string, password?: string}>({
    name: "",
    password: ""
  });
  
  // Store an error message for manual login attemps
  const [error, setError] = useState<string>("");

  // On first render, check local storage keys to see whether to persist login
  useEffect(() => {
    const getLocalKeys = () => {
      for (var i = 0; i < localStorage.length; i++) {
        setUser({
          name: localStorage.key(i)!
        })
      }
    }
    getLocalKeys()
  }, [])

  // Function to store the login details of the user
  const Login = (details: { name: string, password: string }) => {

    // Check password matches "password"
    if (details.name && details.password == userDetails.password) {
      // Just set the name as password always the same
      setUser({
        name: details.name
      })
      // Save details to local storage
      localStorage.setItem(details.name, details.password)
    } else if (!details.name && !details.password) {
      setError('Please enter your name and password!')
    } else if (!details.name) {
      setError('Please enter your name')
    } else if (!details.password) {
      setError('Please enter your password. Hint, the password is password!')
    } else {
      setError('Password incorrect! Hint, the password is password!')
    }

  }

  const Logout = () => {
    setUser({
      name: "",
      password: ""
    })
    localStorage.clear()
    setError("")
  }

  return (
      <div className="mx-auto w-[35rem] justify-center p-8 bg-slate-300 ring-4 ring-slate-400 ring-inset select-none transition-all">

        {(user.name != "" && user.password != "") ? 
        
        (
        
        <Profile Logout={Logout} user={user}/>
        
        ) : (

        <>

        <div className="mx-auto w-2/3 bg-white p-4 rounded-lg shadow-lg">

          <div className='mx-auto p-6 w-1/2 bg-slate-200 rounded-full'>
            <img src={popupIcon} alt="App icon" className='mx-auto' />
          </div>

          <h1 className='text-lg mt-4 text-center'>Sign in here <p className='mt-1 animate-bounce text-2xl'>&#128071;</p></h1>

          <Social />
          <LoginForm Login={Login} error={error}/>

        </div>
        </>

        )}
      </div>

  )
}

export default App
