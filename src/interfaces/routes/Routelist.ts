import FilterJokes from '../../pages/filterjokes';
import Home from '../../pages/home';
import RandomJokes from '../../pages/randomjokes';


interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}

const routes: IRoute[] = [
    {
      path : '/',
      name:'Home Page',
      component:Home,
      exact:true,
    },
    {
        path: '/filter-jokes',
        name: 'Filter Jokes',
        component: FilterJokes,
        exact: true
    },
    {
        path: '/random-jokes/:category',
        name: 'Random Jokes',
        component: RandomJokes,
        exact: true
    },
]

export default routes;