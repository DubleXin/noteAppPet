import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolbarActions from '../components/ToolbarActions';
import ContextMenu from '../features/contextMenu/components/ContextMenu';

export default function HomePage() {
  return (
    <DashboardLayout
      slots={{
        appTitle: Header,
        sidebarFooter: Footer,
        toolbarActions: ToolbarActions,
      }}
    >
      <Outlet />
      <ContextMenu />
    </DashboardLayout>
  );
}
