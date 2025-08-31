const options = [
  {
    label: 'Delete',
    onClick: (target?: object) => console.log('delete NOTE ', target),
  },
  {
    label: 'Rename',
    onClick: () => console.log('rename NOTE'),
  },
];

export default options;
