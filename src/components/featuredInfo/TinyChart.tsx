import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { data } from './TinyChartData'



const TinyChart = ({ dataKey }: { dataKey: 'uv' | 'pv' | 'amt' }) => {
    return (
        <div style={{width: '100px' , height: '65px'}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={data}>
                    <Line type="monotone" dataKey={`${dataKey}`} stroke="#8884d8" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default TinyChart