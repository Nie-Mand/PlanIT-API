const cards = [
    {
      id: 'card-1',
      title: 'Maths Data',
    },
    {
      id: 'card-2',
      title: 'Buy classroom supplies',
    },
    {
      id: 'card-3',
      title: 'Take Assignment 2',
    }
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Resources',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'To Do',
        cards: [],
      },
      'list-3': {
        id: 'list-3',
        title: 'Doing',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2', 'list-3'],
  };
  
  export default data;
  