import React from 'react';
import '../common/style.css'
import RouterView from 'router'
import { BrowserRouter as Router} from 'react-router-dom'  //名字 路由  替换div

class App extends React.Component{
    render(){
        return <div>
        this is haha
        <Router>
            <RouterView/>
        </Router>
        </div>
    }
}
export default App;