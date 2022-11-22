import {RadialChart} from 'react-vis';


const RadialChartGlucoses = (props)  => {

  return (
 
    <RadialChart
      data={[
          {label: 'Nível 1', angle: props.glucose.nivel1},
          {label: 'Nível 2', angle: props.glucose.nivel2},
          {label: 'Nível 4', angle: props.glucose.nivel4},
          {label: 'Nível 3', angle: props.glucose.nivel3}
      ]}
      width={300}
      height={300}
      showLabels={true}
    />
 );
}

export default RadialChartGlucoses;