import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis';

const TurnedAxisGlucoses = (props) => {

  const [glucose, setGlucose] = useState([
    {x: 'Nível 1', y: 1},
    {x: 'Nível 2', y: 1},
    {x: 'Nível 3', y: 1}, 
    {x: 'Nível 4', y: 1},
  ])

  const [total, setTotal] = useState([
    {x: 'Total', y: 1},
    {x: 'Total', y: 1},
    {x: 'Total', y: 1},
    {x: 'Total', y: 1},
  ])

  useEffect(() => {
    console.log(props.glucose)
    console.log(glucose)
    if(props.glucose) {
      setGlucose([
        {x: 'Nível 1', y: props.glucose.nivel1},
        {x: 'Nível 2', y: props.glucose.nivel2},
        {x: 'Nível 3', y: props.glucose.nivel3}, 
        {x: 'Nível 4', y: props.glucose.nivel4},
      ])
  
      setTotal(props.glucose.total)
    }


  }, [props])


  return (
    <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis tickValues={[ 1, 2, 3, 4]}/>
      <VerticalBarSeries
        data={[
          {x: 'Nível 1', y: total},
          {x: 'Nível 2', y: total},
          {x: 'Nível 3', y: total},
          {x: 'Nível 4', y: total}
        ]}
      />
      <VerticalBarSeries
        data={ [   {x: 'Nível 1', y: total},
        {x: 'Nível 2', y: total},
        {x: 'Nível 3', y: total},
        {x: 'Nível 4', y: total}]}
      />

    </XYPlot>
  );
}

export default TurnedAxisGlucoses;