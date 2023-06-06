import './index.scss'
import { AreaChart, CartesianGrid, ResponsiveContainer, XAxis, Area } from 'recharts'
import { data } from './chartData'


const Chart = ({ dataKey }: { dataKey: 'uv' | 'pv' | 'amt' }) => {

  return (
    <section className='chart-wrapper'>
      <div className='chart-container'>
        <ResponsiveContainer width="100%" height="100%">

          <AreaChart width={100} height={400} data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C1F741" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#09031D" stopOpacity={0.1}/>
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke='#7C7B7B' strokeWidth={.2} />
            <XAxis dataKey='name' axisLine={false} style={{ fontSize: '12px'}} />
            <Area type="monotone" dataKey={dataKey} stroke="#C1F741"  strokeWidth={1.4} fill="url(#colorUv)" fillOpacity={.75} animationBegin={200} animationDuration={2000} />
          </AreaChart>

        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default Chart