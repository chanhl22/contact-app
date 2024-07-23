import {RouteProps} from 'react-router-dom';
import MainRouteConfigs from "../../page/mainRouteConfigs";
import UserRouteConfigs from "../../page/userRouteConfigs";

const routeConfigs: RouteProps[] | any = [
    ...MainRouteConfigs,
    ...UserRouteConfigs,
];

export default routeConfigs;
