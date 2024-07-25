import {RouteProps} from 'react-router-dom';
import MainRouteConfigs from "../../page/mainRouteConfigs";
import UserRouteConfigs from "../../page/userRouteConfigs";
import LifeCycleConfigs from 'src/page/life-cycle/lifeCycleRouteConfigs';

const routeConfigs: RouteProps[] | any = [
    ...MainRouteConfigs,
    ...UserRouteConfigs,
    ...LifeCycleConfigs
];

export default routeConfigs;
