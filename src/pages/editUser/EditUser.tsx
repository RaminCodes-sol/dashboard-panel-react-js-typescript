import './index.scss'
import { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom"
import { useMyContext } from "../../myContext/myContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserListType } from "../../myContext/userListData";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';;




type InputType = Pick<UserListType, 'firstName' | 'lastName' | 'email' | 'email' | 'phoneNumber' | 'address'>


const EditUser = () => {
    const { userId } = useParams()
    const { usersData, setUsersData } = useMyContext()
    const [user, setUser] = useState<UserListType>()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<InputType>()



    /*----------Handle-Submit----------*/
    const onSubmit: SubmitHandler<InputType> = (data) => {
        const editedUser = usersData.map(user => {
            if (user.id === Number(userId)) {
                return {
                    ...user,
                    firstName: `${data.firstName}`,
                    lastName: `${data.lastName}`,
                    email: `${data.email}`,
                    phoneNumber: `${data.phoneNumber}`,
                    address: `${data.address}`
                }
            }
            return user
        })
        setUsersData(editedUser)
        navigate('/userList')
    }


    useEffect(() => {
        const userData = usersData.filter(user => user.id === Number(userId))
        setUser(userData[0])
    }, [userId])




  return (
    <section className='edit-user-wrapper'>
        <div className='edit-user-container'>
            
            {/*------------Backward-Button------------*/}
            <div className='container_button'>
                <Link to='/userList'><ArrowBackIcon /></Link>
            </div>
            

            {/*------------Create-User-Button------------*/}
            <div className='container_header'>
                <h2>Edit User</h2>
                <button onClick={() => navigate('/create-user')}>Create</button>
            </div>


            {/*------------Content------------*/}
            <div className='container_content'>

                {/*---------Content_LeftSide---------*/}
                <div className='content_leftSide'>
                    <div className='leftSide-header'>
                        <img src={user?.img} alt='img' />
                        <div>
                            <h3>{user?.firstName} {user?.lastName}</h3>
                            <span>{user?.career}</span>
                        </div>
                    </div>

                    <div className='leftSide-body'>
                        <ul>
                            <li style={{ color: '#BFF440', padding: '.5rem 0', fontSize: '.93rem' }}>Account Details</li>
                            <li><PersonIcon /> {user?.firstName}</li>
                            <li><CalendarMonthIcon /> 10.07.2023</li>
                            <li style={{ color: '#BFF440', padding: '.5rem 0', fontSize: '.93rem'}}>Contact</li>
                            <li><PhoneAndroidIcon /> {user?.phoneNumber}</li>
                            <li><EmailIcon /> {user?.email}</li>
                            <li><LocationOnIcon /> {user?.address}</li>
                        </ul>
                    </div>
                </div>


                {/*---------Content_LeftSide---------*/}
                <div className='content_RightSide'>
                    <div className='rightSide_title'>
                        <h1>Edit</h1>
                    </div>

                    <div className='rightSide_formContainer'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="firstName">FirstName</label>
                            <input type='text' defaultValue={user?.firstName} id='firstName' placeholder='firstName' {...register('firstName', {required: true})} style={{ borderBottomColor: errors.firstName && '#ef233c' }} />
                            
                            <label htmlFor="lastName">LastName</label>
                            <input type='text' defaultValue={user?.lastName} id='lastName' placeholder='lastName' {...register('lastName', { required: true })} style={{ borderBottomColor: errors.lastName && '#ef233c' }} />

                            <label htmlFor="email">Email</label>
                            <input type='text' defaultValue={user?.email} id='email' placeholder='email@gmail.com' {...register('email', { required: true })} style={{ borderBottomColor: errors.email && '#ef233c' }} />

                            <label htmlFor="PhoneNumber">Phone</label>
                            <input type='text' defaultValue={user?.phoneNumber} id='PhoneNumber' placeholder='717-5468747' {...register('phoneNumber', { required: true })} style={{ borderBottomColor: errors.phoneNumber && '#ef233c' }} />

                            <label htmlFor="address">Address</label>
                            <input type='text' defaultValue={user?.address} id='address' placeholder='New York | USA' {...register('address', { required: true })} style={{ borderBottomColor: errors.address && '#ef233c' }} />
                            <button type='submit'>Update</button>
                        </form>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default EditUser