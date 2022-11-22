import { useState, useEffect } from 'react';
import {RadialChart} from 'react-vis';


const RadialChartGlucoses = (props)  => {
  const [chartData, setChartData] = useState([
    {label: 'Nível 1', angle: 1},
    {label: 'Nível 2', angle: 1},

    {label: 'Nível 4', angle: 1},
    {label: 'Nível 3', angle: 1}, 
  ])

  useEffect(() => {
    setChartData([
      {label: 'Nível 1', angle: props.glucose.nivel1},
      {label: 'Nível 2', angle: props.glucose.nivel2},
      {label: 'Nível 4', angle: props.glucose.nivel4},
      {label: 'Nível 3', angle: props.glucose.nivel3}, 
    ])
  }, [props])

  return (
 
    <RadialChart
      data={chartData}
      width={300}
      height={300}
      showLabels={true}
    />
 );
}

export default RadialChartGlucoses;