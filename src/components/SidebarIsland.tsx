import { type ComponentChildren } from 'preact';
import { SidebarProvider } from './SidebarProvider';
import SidebarToggle from './SidebarToggle';
import SidebarWrapper from './SidebarWrapper';

export default function SidebarIsland({
  children,
}: {
  children: ComponentChildren;
}) {
  return (
    <SidebarProvider>
      <div id="sidebar" class="sidebar">
        <div class="sidebar-header">
          <SidebarToggle />
        </div>
        <SidebarWrapper>{children}</SidebarWrapper>
      </div>
    </SidebarProvider>
  );
}
