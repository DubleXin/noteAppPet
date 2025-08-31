const options = [
  {
    label: 'Create folder',
    onClick: (target?: object) => console.log('create folder FOLDER ', target),
  },
  {
    label: 'Create workspace',
    onClick: (target?: object) => console.log('create workspace FOLDER'),
  },
  {
    label: 'Delete',
    onClick: (target?: object) => console.log('delete FOLDER'),
  },
  {
    label: 'Rename',
    onClick: (target?: object) => console.log('rename FOLDER'),
  },
];

export default options;
