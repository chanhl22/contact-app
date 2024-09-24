import {RouteProps} from 'react-router-dom';
import MainRouteConfigs from "../../page/mainRouteConfigs";
import UserRouteConfigs from "../../page/userRouteConfigs";
import LifeCycle1Configs from '../../page/life-cycle/lifeCycle1RouteConfigs';
import LifeCycle2Configs from "../../page/life-cycle/lifeCycle2RouteConfigs";
import GrammarConfigs from "../../page/grammar/GrammarConfigs";

const routeConfigs: RouteProps[] | any = [
    ...MainRouteConfigs,
    ...UserRouteConfigs,
    ...LifeCycle1Configs,
    ...LifeCycle2Configs,
    ...GrammarConfigs
];

export default routeConfigs;
