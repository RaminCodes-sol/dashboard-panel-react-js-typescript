import './index.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMyContext } from '../../myContext/myContext'



const UserList = () => {
  const { usersData, setUsersData } = useMyContext()
  const navigate = useNavigate()
  const [sortState, setSortState] = useState({
    byId: true,
    byName: true,
    byStatus: true,
    byTransaction: true,
    byCheckAll: false,
  })



  
  /*------------Select-All-Users------------*/
  const selectAllUsers = (): void => {
    const updatedData = usersData.map(user => {
      if (sortState.byCheckAll) {
        setSortState({ ...sortState, byCheckAll: false })
        return {
          ...user,
          checked: false
        }
      } else {
        setSortState({ ...sortState, byCheckAll: true })
        return {
          ...user,
          checked: true
        }
      }
    })
    setUsersData(updatedData)
  }


  /*------------Sort-By-User-Id------------*/
  const sortByUserId = (): void => {
    const sortedList = usersData?.sort((a, b) => {
      if (sortState.byId) {
        setSortState({ ...sortState, byId: false })
        return a.id > b.id ? 1 : -1
      } else {
        setSortState({ ...sortState, byId: true })
        return b.id > a.id ? 1 : -1
      }
    })
    setUsersData(sortedList)
  }


  /*------------Sort-By-User-Name------------*/
  const sortByUserName = (): void => {
    const sortedList = usersData?.sort((a, b) => {
      if (sortState.byName) {
        setSortState({ ...sortState, byName: false })
        return a.firstName.localeCompare(b.firstName)
      } else {
        setSortState({ ...sortState, byName: true })
        return b.firstName.localeCompare(a.firstName)
      }
    })
    setUsersData(sortedList)
  }


  /*------------Sort-By-User-Status------------*/
  const sortByUserStatus = (): void => {
    const statusOrder = ['active', 'passive']

    const sortedList = usersData?.sort((a, b) => {
      if (sortState.byStatus) {
        setSortState({ ...sortState, byStatus: false })
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
      } else {
        setSortState({ ...sortState, byStatus: true })
        return statusOrder.indexOf(b.status) - statusOrder.indexOf(a.status)
      }
    })
    setUsersData(sortedList)
  }


  /*------------Sort-By-User-Transaction------------*/
  const sortByUserTransaction = (): void => {
    const sortedList = usersData?.sort((a, b) => {
      if (sortState.byTransaction) {
        setSortState({ ...sortState, byTransaction: false })
        return a.transaction > b.transaction ? 1 : -1
      } else {
        setSortState({ ...sortState, byTransaction: true })
        return b.transaction > a.transaction ? 1 : -1
      }
    })
    setUsersData(sortedList)
  }


  /*------------Remove-User------------*/
  const removeUser = (id: number): void => {
    setUsersData(usersData.filter(user => user.id !== id))
  }



  /*------------Handle-Change------------*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
    setUsersData(usersData.map(user => {
      if (user.id === id) {
        return {
          ...user,
          checked: !user.checked
        }
      }
      return user
    }))
  }


  
  return (
    <section className='userList-wrapper'>
      {
        !usersData.length
          ? <h5>there is no user</h5>
          : (
            <table>
              <tbody>

                {/*---------Table-Header---------*/}
                <tr className='table-title'>
                  <th>
                    <input type='checkbox' checked={sortState.byCheckAll} onChange={selectAllUsers} />
                    <button onClick={() => sortByUserId()}>ID</button>
                  </th>
                  <th>
                    <button onClick={() => sortByUserName()}>User</button>
                  </th>
                  <th data-table-state='column'>
                    <span>Email</span>
                  </th>
                  <th data-table-state='column'>
                    <button onClick={() => sortByUserStatus()}>Status</button>
                  </th>
                  <th data-table-state='column-transaction'>
                    <button onClick={() => sortByUserTransaction()}>Transaction</button>
                  </th>
                  <th>
                    <span>Action</span>
                  </th>
                </tr>

                {/*---------Table-Body---------*/}
                {
                  usersData?.map(user => {
                    return (
                      <tr key={user.id} className='table-row'>
                        <td className='user-checkbox'>
                          <input type='checkbox' checked={user.checked} onChange={(e) => handleChange(e, user.id)} />
                          <span>{user.id}</span>
                        </td>

                        <td className='user-img'>
                          <img src={user.img} alt='img' />
                          <span>{user.firstName} {user.lastName}</span>
                        </td>

                        <td className='user-email' data-table-state='column'>
                          <span>{user.email}</span>
                        </td>

                        <td className='user-status' data-table-state='column'>
                          <span style={{ backgroundColor: `${user.status === 'active' ? '#4BBE7E': 'red'}` }}></span>
                          <span>{user.status}</span>
                        </td>

                        <td className='user-transaction' data-table-state='column-transaction'>
                          <span>${user.transaction}</span>
                        </td>

                        <td className='user-action'>
                          <button onClick={() => navigate(`/userList/user/${user.id}`)}>edit</button>
                          <button onClick={() => removeUser(user.id)}><DeleteIcon /></button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )
      }
    </section>
  )
}

export default UserList