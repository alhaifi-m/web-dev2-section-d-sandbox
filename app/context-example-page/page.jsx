import { UserProvider } from "../context/userContext"
import UserProfileWithContext from "../components/ContextExamples/UserProfileWithContext"

const UserContextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <UserProvider userId={1}>
            <UserProfileWithContext/>




            
        </UserProvider>

    </div>
  )
}

export default UserContextPage