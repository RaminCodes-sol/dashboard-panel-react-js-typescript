import './index.scss'


interface DataTyppe {
  id: number;
  img: string;
  name: string;
  tnxDate: string;
  tnxAmount: number;
  tnxStatus: string;
}


const customerData: Array<DataTyppe> = [
  {
    id: 1,
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg',
    name: 'Loura Pit',
    tnxDate: '27 Jun 2021',
    tnxAmount: 227.65,
    tnxStatus: 'approved'
  },
  {
    id: 2,
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg',
    name: 'Eric Bailey',
    tnxDate: '23 May 2021',
    tnxAmount: 57.25,
    tnxStatus: 'pending'
  },
  {
    id: 3,
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg',
    name: 'Sara Wilkie',
    tnxDate: '12 Dec 2021',
    tnxAmount: 175.94,
    tnxStatus: 'approved'
  },
  {
    id: 4,
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg',
    name: 'Mike Carry',
    tnxDate: '17 May 2021',
    tnxAmount: 17.47,
    tnxStatus: 'rejected'
  },
  {
    id: 5,
    img: 'https://i.postimg.cc/pTJXHmvD/aliya-amangeldi.jpg',
    name: 'Chris Loue',
    tnxDate: '17 May 2021',
    tnxAmount: 17.47,
    tnxStatus: 'approved'
  }
]


const WidgetLg = () => {
  return (
    <section className='widgetLg-container'>
      <h2 className='widgetLg_title'>Latest Transactions</h2>

      <table className='widgetLg_table'>
        <tbody>
          <tr className='table-title'>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>

          {
            customerData.map(customer => {
              return (
                <tr className='table-row' key={customer.id}>
                  <td>
                    <img src={customer.img} alt='img' />
                    <span>{customer.name}</span>
                  </td>
                  <td>{customer.tnxDate}</td>
                  <td>${customer.tnxAmount}</td>
                  <td>{customer.tnxStatus}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </section>
  )
}

export default WidgetLg