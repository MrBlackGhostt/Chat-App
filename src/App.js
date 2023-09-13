import { ChatEngine } from "react-chat-engine"

import LoginFrom from "./components/LoginForm"

import ChatFeed from "./components/ChatFeed"

import "./App.css"

const App = () => {
  if (!localStorage.getItem("username")) return <LoginFrom />
  return (
    <>
      <ChatEngine
        height='100vh'
        projectID='
852f70df-5198-4c22-a49d-bbd53257fe56'
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  )
}

export default App
