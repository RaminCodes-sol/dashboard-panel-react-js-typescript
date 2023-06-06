import { data } from './RadarChartData'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';






const ChartRadar = ({ productName }: { productName: string }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="69%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" style={{ fontSize: '.8rem' }} />
          <Radar name={productName} dataKey="A" stroke="#C1F741" fill="#C1F741" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartRadar