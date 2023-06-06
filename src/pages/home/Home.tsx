import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import './index.scss'




const Home = () => {
  return (
    <section className='home-container'>
      <FeaturedInfo />

      <Chart dataKey='uv' />
      
      <div className='widgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </section>
  )
}

export default Home