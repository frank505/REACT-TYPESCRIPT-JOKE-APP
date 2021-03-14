import Categories from '../pages/categories';
import Home from '../pages/home';
import RandomJokes from '../pages/randomjokes';


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
        name: 'Categories',
        component: Categories,
        exact: true
    },
    {
        path: '/random-jokes',
        name: 'Random Jokes',
        component: RandomJokes,
        exact: true
    },
]

export default routes;