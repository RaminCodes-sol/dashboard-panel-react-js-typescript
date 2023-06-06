import './index.scss'
import { useNavigate, Link } from 'react-router-dom'
import { useMyContext } from '../../myContext/myContext'
import { useForm, SubmitHandler } from 'react-hook-form'
import { UserListType } from '../../myContext/userListData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



type InputType = Pick<UserListType, 'firstName' | 'lastName' | 'email' | 'email' | 'phoneNumber' | 'address' | 'career'>


const CreateUser = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<InputType>()
  const { usersData, setUsersData} = useMyContext()
  const navigate = useNavigate()


  const onSubmit: SubmitHandler<InputType> = (data) => {
    setUsersData([
        ...usersData,
        {
            id: usersData.length + 1,
            firstName: `${data.firstName}` ,
            lastName: `${data.lastName}`,
            img: 'https://i.postimg.cc/fWcZB5xt/person-4.png',
            email: `${data.email}`,
            status: 'active',
            transaction: 70,
            checked: false,
            phoneNumber: `${data.phoneNumber}`,
            address: `${data.address}`,
            career: `${data.career}`,
        }
    ])
    navigate('/userList')
  }



  return (
    <section className='newUser-wrapper'>

      <div className='newUser-container'>
          <div className='newUser_title'>
            <Link to='/userList'><ArrowBackIcon /></Link>
            <h3>Create User</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='fistName'>FirstName</label>
                <input type='text' {...register('firstName', { required: true })} maxLength={12} style={{ border: errors.firstName && '1px solid crimson'}} placeholder='Alex' />
            </div>

            <div>
                <label htmlFor='lastName'>LastName</label>
                <input type='text' {...register('lastName', { required: true })} maxLength={12} style={{ border: errors.lastName && '1px solid crimson'}} placeholder='Rabinson' />
            </div>

            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' {...register('email', { required: true })} style={{ border: errors.email && '1px solid crimson'}} placeholder='alex-Robinson@gmail.com'/>
            </div>

            <div>
                <label htmlFor='phoneNumber'>PhoneNumber</label>
                <input type='text' {...register('phoneNumber', { required: true })} style={{ border: errors.phoneNumber && '1px solid crimson'}} placeholder='718-9605519' />
            </div>
            
            <div>
                <label htmlFor='career'>Career</label>
                <input type='text' {...register('career', { required: true })} style={{ border: errors.career && '1px solid crimson'}} placeholder='Blockchain Developer' />
            </div>

            <div>
                <label htmlFor='address'>Address</label>
                <input type='text' {...register('address', { required: true })} style={{ border: errors.address && '1px solid crimson'}} placeholder='New York | USA' />
            </div>

            <div>
                <button type='submit'>Create</button>
            </div> 
          </form>
      </div>

    </section>
  )
}

export default CreateUser