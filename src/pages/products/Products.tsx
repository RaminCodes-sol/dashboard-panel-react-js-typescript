import { useMyContext } from '../../myContext/myContext'
import './index.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'



const Products = () => {
  const { productsData, setProductsData } = useMyContext()
  const navigate = useNavigate()
  const [sortState, setSortState] = useState({
    byId: true,
    byTitle: true,
    byStock: true,
    byPrice: true,
    byCheckAll: false,
  })


  /*------------Select-All-Users------------*/
  const selectAllProducts = (): void => {
    const updatedData = productsData.map(user => {
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
    setProductsData(updatedData)
  }
  
  
  
  /*------------Sort-By-Product-Id------------*/
  const sortByProductId = (): void => {
    const sortedList = productsData?.sort((a, b) => {
      if (sortState.byId) {
        setSortState({ ...sortState, byId: false })
        return a.id > b.id ? 1 : -1
      } else {
        setSortState({ ...sortState, byId: true })
        return b.id > a.id ? 1 : -1
      }
    })
    setProductsData(sortedList)
  }



  /*------------Sort-By-Product-Title------------*/
  const sortByProductName = (): void => {
    const sortedList = productsData?.sort((a, b) => {
      if (sortState.byTitle) {
        setSortState({ ...sortState, byTitle: false })
        return a.title.localeCompare(b.title)
      } else {
        setSortState({ ...sortState, byTitle: true })
        return b.title.localeCompare(a.title)
      }
    })
    setProductsData(sortedList)
  }



  /*------------Sort-By-Product-Stock------------*/
  const sortByProductStock = (): void => {
    const sortedList = productsData?.sort((a, b) => {
      if (sortState.byStock) {
        setSortState({ ...sortState, byStock: false })
        return a.stock > b.stock ? 1 : -1
      } else {
        setSortState({ ...sortState, byStock: true })
        return b.stock > a.stock ? 1 : -1
      }
    })
    setProductsData(sortedList)
  }



  /*------------Sort-By-Product-Price------------*/
  const sortByProductPrice = (): void => {
    const sortedList = productsData?.sort((a, b) => {
      if (sortState.byPrice) {
        setSortState({ ...sortState, byPrice: false })
        return a.price > b.price ? 1 : -1
      } else {
        setSortState({ ...sortState, byPrice: true })
        return b.price > a.price ? 1 : -1
      }
    })
    setProductsData(sortedList)
  }



  /*------------Remove-Product------------*/
  const removeProduct = (id: number): void => {
    setProductsData(productsData.filter(user => user.id !== id))
  }



  /*------------Handle-Change------------*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
    setProductsData(productsData.map(user => {
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
    <section className='products-container'>
      {
        !productsData.length
          ? <h5>there is no user</h5>
          : (
            <table>
              <tbody>

                {/*---------Table-Header---------*/}
                <tr className='table-title'>
                  <th className='hidden'>
                    <input type='checkbox' checked={sortState.byCheckAll} onChange={selectAllProducts} />
                    <button onClick={() => sortByProductId()}>ID</button>
                  </th>
                  <th>
                    <button onClick={() => sortByProductName()}>Product</button>
                  </th>
                  <th>
                    <button onClick={() => sortByProductStock()}>Stock</button>
                  </th>
                  <th>
                    <button onClick={() => sortByProductPrice()}>Price</button>
                  </th>
                  <th>
                    <span>Action</span>
                  </th>
                </tr>

                {/*---------Table-Body---------*/}
                {
                  productsData?.map(product => {
                    return (
                      <tr key={product.id} className='table-row'>
                        <td className='product-checkbox hidden'>
                          <input type='checkbox' checked={product.checked} onChange={(e) => handleChange(e, product.id)} />
                          <span>{product.id}</span>
                        </td>

                        <td className='product-img'>
                          <img src={product.img} alt='img' />
                          <span>{product.title}</span>
                        </td>

                        <td className='product-stock'>
                          <span>{product.stock}</span>
                        </td>

                        <td className='product-price'>
                          <span>${product.price}</span>
                        </td>

                        <td className='product-action'>
                          <button onClick={() => navigate(`/products/product/${product.id}`)}><VisibilityIcon /></button>
                          <button onClick={() => removeProduct(product.id)}><DeleteIcon /></button>
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

export default Products