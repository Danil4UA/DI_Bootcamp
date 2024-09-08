import './App.css'
import PostList from './features/posts/PostsList'
import UsersSearch from "./features/users/UsersSearch"
import Users from './features/users/Users'

function App() {
  return (
    <>
      {/* <UsersSearch></UsersSearch> */}
      <Users></Users>
      <h2>The PostList APP</h2>
      <PostList/>
    </>
  )
}

export default App
