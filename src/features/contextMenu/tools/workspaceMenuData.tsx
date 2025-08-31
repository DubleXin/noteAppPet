const options = [
  {
    label: 'Create note',
    onClick: (target?: object) =>
      console.log(
        'create note option with workspace id: ',
        (target as { id: number; name: string }).id
      ),
  },
  {
    label: 'Delete',
    onClick: (target?: object) =>
      console.log(
        'delete workspace  option with workspace id: ',
        (target as { id: number; name: string }).id
      ),
  },
  {
    label: 'Rename',
    onClick: (target?: object) =>
      console.log(
        'rename workspace  option with workspace id: ',
        (target as { id: number; name: string }).id
      ),
  },
];

export default options;
