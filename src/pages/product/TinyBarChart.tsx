import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { data } from './barChartData';



const TinyBarChart = () => {
  return (
    <div style={{ padding: '1rem'}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={200} height={70} data={data}>
          <Bar dataKey="uv" fill="#C1F741" />
        </BarChart> 
      </ResponsiveContainer>
    </div>
  )
}

export default TinyBarChart