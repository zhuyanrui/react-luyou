//有且只能有一个router
import React from 'react';
import Routes from './routes'
import RouteMap from './map'

class RouterView extends React.Component{
    render(){
        const {routes}=this.props;
        console.log(this.props);
        return <div>
                 <RouteMap routes={routes===undefined?Routes:routes}></RouteMap>  
                
           
        </div>
    }
}
export default RouterView;