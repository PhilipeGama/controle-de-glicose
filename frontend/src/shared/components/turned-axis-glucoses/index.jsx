import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis';

const TurnedAxisGlucoses = (props) => {

  return (
    <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />

      <YAxis top={0} right={50}/>

      <VerticalBarSeries
        data={[
          {x: 'Nível 1', y: props.glucose.nivel1},
          {x: 'Nível 2', y: props.glucose.nivel2},
          {x: 'Nível 3', y: props.glucose.nivel3},
          {x: 'Nível 4', y: props.glucose.nivel4},
          {x: 'Total', y: props.glucose.total}
        ]}
      />

    </XYPlot>
  );
}

export default TurnedAxisGlucoses;