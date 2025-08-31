import { type MenuItem } from '../components/ContextMenu';
import folderOptions from './folderMenuData';
import workspaceOptions from './workspaceMenuData';
import noteOptions from './noteMenuData';
export type ContextMenuType = {
  readonly name: 'folder' | 'note' | 'workspace';
};

const optionListMap = new Map<'folder' | 'note' | 'workspace', MenuItem[]>([
  ['folder', folderOptions],
  ['note', noteOptions],
  ['workspace', workspaceOptions],
]);
export function handleContextMenu(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  type: ContextMenuType,
  open: (x: number, y: number, items: MenuItem[], target?: object) => void
) {
  const target = event.currentTarget;
  const id = target.dataset.id;
  const [x, y] = [event.clientX, event.clientY];
  console.log(id);
  console.log(type);

  const options = optionListMap.get(type.name);
  if (!options) return;
  event.preventDefault();
  open(x, y, options, {
    id: id,
    type: type.name,
  });
}
