import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useHistory } from 'react-router-dom';
export function useLogin()  {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const history = useHistory();

   async function login(email, password)  {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      
      localStorage.setItem('user', JSON.stringify(json))

      
      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
      history.push('/view')
    }
  }

  return { login, isLoading, error }
}