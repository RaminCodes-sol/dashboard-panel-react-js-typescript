import './index.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import TinyChart from './TinyChart'



const FeaturedInfo = () => {
  return (
    <section className='featuredInfo-container'>
        <ul>

            {/*-----------Li-First-----------*/}
            <li>
                <div>
                    <h2>Revenue</h2>
                    <TinyChart dataKey='uv' />
                </div>

                <div>
                    <span>$2.545</span>
                    <span>-11.4 <ArrowDownwardIcon /></span>
                </div>
                
                <div>
                    <p>Compared to last month</p>
                </div>
            </li>


            {/*-----------Li-Second-----------*/}
            <li>
                <div>
                    <h2>Sales</h2>
                    <TinyChart dataKey='pv' />
                </div>

                <div>
                    <span>$4.454</span>
                    <span>-1.4 <ArrowDownwardIcon /></span>
                </div>
                
                <div>
                    <p>Compared to last month</p>
                </div>
            </li>


            {/*-----------Li-Third-----------*/}
            <li>
                <div>
                    <h2>Cost</h2>
                    <TinyChart dataKey='amt' />
                </div>

                <div>
                    <span>$2.023</span>
                    <span>+2.1 <ArrowUpwardIcon style={{color: 'greenyellow'}} /></span>
                </div>
                
                <div>
                    <p>Compared to last month</p>
                </div>
            </li>

        </ul>
    </section>
  )
}

export default FeaturedInfo