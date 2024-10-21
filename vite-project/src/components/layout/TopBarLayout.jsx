import { Outlet } from "react-router";
import { TopBar } from "./TopBar";


export const TopBarLayout = () => {
  return (
    <div>
      <TopBar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}