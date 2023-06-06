import './index.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { useMyContext } from '../../myContext/myContext'
import { ProductType } from '../../myContext/productData'
import ChartRadar from './ChartRadar'
import TinyBarChart from './TinyBarChart'



const Product = () => {
  const { productId } = useParams()
  const { productsData } = useMyContext()
  const [product, setProduct] = useState<ProductType>()


  useEffect(() => {
    const product = productsData.find(product => product.id === Number(productId))
    setProduct(product)
  }, [productId])



  return (
    <section className='product-container'>

      {/*----------Product-LeftSide----------*/}
      <div className='product_leftSide'>

        {/*------PerformanceChart------*/}
        <div className='performanceChart'>
          <h3>Sales Performance</h3>
          <Chart dataKey='pv' />
        </div>

        {/*------Details------*/}
        <div className='details-container'>
          <div className='barChart'>
            <h4>Popuarity</h4>
            <div>
              <TinyBarChart />
            </div>
          </div>

          <div className='content'>
            <div className='figure'>
              <div>
                <img src={product?.img} alt='img' />
                <h3>{product?.title}</h3>              
              </div>
              <h2>${product?.price}</h2>
            </div>

            <ul className='detail'>
              <li>
                <span>id:</span>
                <span>{product?.productId}</span>
              </li>
              <li>
                <span>sales:</span>
                <span>{product?.sales}</span>
              </li>
              <li>
                <span>inStock:</span>
                <span>{product?.inStock}</span>
              </li>
              <li>
                <span>stock:</span>
                <span>{product?.stock}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>


      {/*----------Product-RightSide----------*/}
      <div className='product_rightSide'>
        <h3>Global Radar Statistic</h3>
        <div className='radarChart'>
          <ChartRadar productName={`${product?.title}`} />
        </div>
      </div>

    </section>
  )
}

export default Product