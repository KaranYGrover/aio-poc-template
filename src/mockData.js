import lolImg from 'assets/images/lol.png';
import dota2 from 'assets/images/dota2.png';
import csgo from 'assets/images/csgo.png';
import overwatch from 'assets/images/overwatch.png';
import callofduty from 'assets/images/callofduty.png';
import ufc4 from 'assets/images/ufc4.png';

const data = {
  overwatch: {
    key: 'overwatch',
    title: 'Overwatch',
    icon: overwatch,
    headerBackground: '#484848',
    headerLinkColor: '#cf7432',
    backgroundUrl: 'https://i.ytimg.com/vi/dZl1yGUetjI/maxresdefault.jpg',
    streams: [
      'https://www.youtube.com/watch?v=DrPyUcNo1HI',
      'https://www.youtube.com/watch?v=3AmhK57QFtw',
    ],
    charts: [
      {
        width: '400px',
        height: '300px',
        chartType: 'ScatterChart',
        data: [
          ['Solo kills', 'Player'],
          [8, 12],
          [4, 5.5],
          [11, 14],
          [4, 5],
          [3, 3.5],
          [6.5, 7],
        ],
        options: {
          title: 'Solo kills vs. No. of Players',
          hAxis: { title: 'No. of Players', minValue: 0, maxValue: 15 },
          vAxis: { title: 'Solo kills', minValue: 0, maxValue: 15 },
          legend: 'none',
          backgroundColor: '#cf7432',
          colors: ['#000'],
        },
        rootProps: { 'data-testid': '1' },
      },
      {
        width: '400px',
        height: '300px',
        chartType: 'GeoChart',
        data: [
          ['Country', 'Highest offense'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
        ],
        options: {
          title: 'Highest offense',
          legend: 'none',
          backgroundColor: '#cf7432',
          colors: ['#000'],
        },
        rootProps: { 'data-testid': '1' },
      },
      {
        width: '400px',
        height: '300px',
        chartType: 'BarChart',
        data: [
          ['City', '2010 Population'],
          ['Playstation', 8175000],
          ['Xbox', 3792000],
          ['Nintendo Switch', 2695000],
          ['PC', 2099000],
        ],
        options: {
          title: 'Platforms vs. Eliminations',
          hAxis: { title: 'Eliminations', minValue: 0, maxValue: 15 },
          vAxis: { title: 'Platforms', minValue: 0, maxValue: 15 },
          legend: 'none',
          backgroundColor: '#cf7432',
          colors: ['#000'],
        },
        rootProps: { 'data-testid': '1' },
      },
    ],
  },
  lol: {
    key: 'lol',
    title: 'League of Legends',
    icon: lolImg,
    headerBackground: '#733133',
    headerLinkColor: '#6695e9',
    backgroundUrl:
      'https://i.pinimg.com/originals/5e/62/f1/5e62f1a8adecdeb028d6a78e6e755127.jpg',
    streams: [
      'https://www.youtube.com/watch?v=FKDqB7ZZp_g',
      'https://www.youtube.com/watch?v=cr3ZrXRnWRM',
    ],
  },
  dota2: {
    key: 'dota2',
    title: 'Dota 2',
    icon: dota2,
    headerBackground: '#8c4200',
    headerLinkColor: '#83ffb7',
    backgroundUrl: 'https://wallpapercave.com/wp/wp2532627.jpg',
    streams: [
      'https://www.youtube.com/watch?v=PL_WghQc8hQ',
      'https://www.youtube.com/watch?v=wfJ2M8qzAOI',
    ],
  },
  ufc4: {
    key: 'ufc4',
    title: 'UFC 4',
    icon: ufc4,
    headerBackground: '#000',
    headerLinkColor: '#0cdeaf',
    backgroundUrl:
      'https://www.operationsports.com/wp-content/uploads/2020/07/ufc-4-cover.png',
    streams: [
      'https://www.youtube.com/watch?v=itRGLVGao_w',
      'https://www.youtube.com/watch?v=vtSaU6SlVFM',
    ],
  },
  callofduty: {
    key: 'callofduty',
    title: 'Call of Duty',
    icon: callofduty,
    headerBackground: '#131025',
    headerLinkColor: '#fff',
    backgroundUrl:
      'https://image-cdn.essentiallysports.com/wp-content/uploads/20200725033143/Is-Call-of-Duty-Down-PS4-and-Xbox-Users-Complains-about-Game-Servers-Not-Responding.jpg',
    streams: [
      'https://www.youtube.com/watch?v=bxDk9YUTeS8',
      'https://www.youtube.com/watch?v=M7oK_VhLUOw',
    ],
  },
  csgo: {
    key: 'csgo',
    title: 'CS:GO',
    icon: csgo,
    headerBackground: '#025080',
    headerLinkColor: '#cf5032',
    backgroundUrl:
      'https://image-cdn.essentiallysports.com/wp-content/uploads/20200602171212/71rVqrAy5QL._SL1500_.jpg',
    streams: [
      'https://www.youtube.com/watch?v=dWovDBhPvHA',
      'https://www.youtube.com/watch?v=S2HnpQ4x0mA',
    ],
  },
};

export default data;
