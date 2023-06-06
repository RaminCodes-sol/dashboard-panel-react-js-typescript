import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import CreateUser from "./pages/createUser/CreateUser"
import EditUser from "./pages/editUser/EditUser"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"
import Products from "./pages/products/Products"
import UserList from "./pages/userList/UserList"


function App() {
  

  return (
    <div id="App">
      <div className='main-wrapper'>
        <Navbar />

        <main className='main-container'>
          <Sidebar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/userList' element={<UserList />} />
            <Route path='/userList/user/:userId' element={<EditUser />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/product/:productId' element={<Product />} />
          </Routes>
        </main>

      </div>
    </div>
  )
}

export default App
