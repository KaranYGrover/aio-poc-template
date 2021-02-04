import { useContext } from 'react';
import styled from 'styled-components';
import Chart from 'react-google-charts';
import _chunk from 'lodash/chunk';

import { GameContext } from 'GameContext';

const ChartContainer = styled.div`
  padding: 2rem 3.5rem;
  display: flex;
  justify-content: space-between;
`;

const NoChartsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14rem;
  color: white;
  font-family: fantasy;
  font-size: 2em;
`;

const ChartRow = ({ data = [] }) => {
  return (
    <ChartContainer>
      {data.map((chart, idx) => (
        <Chart key={`chart-${idx}`} {...chart} />
      ))}
    </ChartContainer>
  );
};

const ChartSection = () => {
  const { currentData: { charts = [] } = {} } = useContext(GameContext);

  if (!charts) {
    return null;
  }

  const chartList = _chunk(charts, 3);

  if (!charts.length) {
    return (
      <NoChartsMessage> No Charts to show. Check again later</NoChartsMessage>
    );
  }

  return chartList.map((data, idx) => (
    <ChartRow data={data} key={`chart-row-${idx}`} />
  ));
};

export { ChartSection };
