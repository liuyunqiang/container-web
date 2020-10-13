import Loadable from 'react-loadable';
import { createBrowserHistory } from 'history';
// import MainLayout from '@/layouts/MainLayout';
import Loading from '../components/Loading';


const App = Loadable({ loader: () => import('../pages/App'), loading: Loading });
// const MusicClub = Loadable({ loader: () => import('@/pages/MusicClub'), loading: Loading });
// const MyCenter = Loadable({ loader: () => import('@/pages/MyCenter'), loading: Loading });

export const history = createBrowserHistory();

export const routes = [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        // layout: MainLayout,
        component: App
    }
]