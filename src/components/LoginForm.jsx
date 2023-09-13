import { useState } from "react"
import axios from "axios"

const LoginForm = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = {
      "Project-ID": "852f70df-5198-4c22-a49d-bbd53257fe56",
      "User-Name": userName,
      "User-Secret": password,
    }

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      })

      localStorage.setItem("username", userName)
      localStorage.setItem("password", password)

      window.location.reload()
    } catch (err) {
      setErr("Oops, incorrect credentials")
    }
  }

  return (
    <>
      <div className='wrapper'>
        <div className='form'>
          <h1 className='title'> Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className='input'
              placeholder='Username'
              required
            />
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input'
              placeholder='Username'
              required
            />
            <div align='center'>
              <button type='submit' className='button'>
                <span>Start Chatting</span>
              </button>
            </div>
            <h2 className='error'>{err}</h2>
          </form>
        </div>
      </div>
    </>
  )
}
export default LoginForm
