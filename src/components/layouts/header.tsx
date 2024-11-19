import { Breadcrumbs } from '../breadcrumbs';
import { Separator } from '../ui/separator';
import { SidebarTrigger } from '../ui/sidebar';
import { UserNav } from './user-nav';

export default function Header() {
  return (
    <header className="flex w-full h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>
      <div className="flex justify-end gap-2 px-4">
        <UserNav />
      </div>
    </header>
  );
}
