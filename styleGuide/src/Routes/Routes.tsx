import {lazy} from 'react';
// const Link1 = lazy(() => import('../Pages/Link1'));
// const Link2 = lazy(() => import('../Pages/Link2'));
// const Link3 = lazy(() => import('../Pages/Link3'));
import Link1 from "../Pages/Link1";
import Link2 from "../Pages/Link2";
import Link3 from "../Pages/Link3";

interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
  }

const routes: IRoute[] = [
    {
        path: "/",
        name: "one content",
        component: Link1,
        exact: true,
    },
    {
        path: "/link1",
        name: "one content",
        component: Link1,
        exact: true,
    },
    {
        path: "/link2",
        name: "one content",
        component: Link2,
        exact: true,
    },
    {
        path: "/link3",
        name: "one content",
        component: Link3,
        exact: true,
    }
]

export default routes