// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12

import { SideBar } from '@/components';
import { TopMenu } from '@/components';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        {children}
      </div>
    </>
  );
}