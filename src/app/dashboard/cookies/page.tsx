import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
    title: 'Cookies Page',
    description: 'Cookies description Page',
};


export default function CookiesPage() {
    const cookiesStore = cookies()
    const cookieTab = Number(cookiesStore.get('selectedTab')?.value ?? '1')

    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <div className="flex flex-col">
                    <span className="text-3xl"> Tabs </span>
                    <TabBar
                        currentTab={ cookieTab }
                    />
                </div>


            </div>

        </div>
    );
}