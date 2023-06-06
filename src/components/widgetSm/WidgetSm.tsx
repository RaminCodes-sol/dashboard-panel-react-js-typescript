import './index.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';


interface DataType {
  id: number;
  name: string;
  position: string;
  img: string;
}


const usersData: Array<DataType> = [
  {
    id: 1,
    name: 'Anna Keller',
    position: 'Software Engineer',
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg'
  },
  {
    id: 2,
    name: 'Alex Robinson',
    position: 'Blockchain Developer',
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg'
  },
  {
      id: 3,
      name: 'Loura Cooper',
      position: 'Designer',
      img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg'
  },
  {
    id: 4,
    name: 'Russ Linville',
    position: 'Manager',
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg'
  },
  {
    id: 5,
    name: 'Alisha Davidson',
    position: 'Art Director',
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg'
  }
]



const WidgetSm = () => {
  return (
    <section className='widgetSm-container'>
      <h2>New Join Members</h2>
      
      <ul>
        {
          usersData.map(user => {
            return (
              <li key={user.id}>
                <figure>
                  <img src={user.img} alt='img' />
                </figure>

                <div>
                  <h4>{user.name}</h4>
                  <span>{user.position}</span>
                </div>

                <button>
                  <VisibilityIcon />
                  Display
                </button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default WidgetSm