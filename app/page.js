import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Counter from "./components/Counter";
import EmployeeList from "./components/EmployeeList";
import GetData from "./components/GetData";
import RegisterationForm from "./components/RegisterationForm";
import UserProfile from "./components/ContextExamples/UserProfile";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-gray-100 p-8 w-full justify-between">
      {/* <Profile />
      <Posts /> */}
      {/* <Counter />
      <EmployeeList /> */}
      {/* <GetData /> */}
      {/* <RegisterationForm /> */}
      <UserProfile userId={6} />
      {/* <UserProfile userId={2} /> */}
      {/* <UserProfile userId={3} /> */}
      {/* <UserProfile userId={4} /> */}
      {/* <UserProfile userId={5} /> */}
    </main>
  );
}
