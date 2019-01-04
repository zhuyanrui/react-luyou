import React from 'react';
// @Hocbase

// class Comp1 extends React.Component{
//     render(){
//         console.log(this.props)
//         return <div>
//             this is comp1
//             <h1>{this.props.children}</h1>
//         </div>
//     }
// }
//高阶组件
// const HOcComp3=(Component)=>{
//     //返回一个新的高阶组件
//     return class extends React.Component{
//         render(){
//             return <div>
//                 <Component {...this.props}>天空飘来五个字,那都不是事</Component>
//             </div>
//         }
//     }
// }
// const hocComp=(Component)=>{
//     return class extends React.Component{
//         render(){
//             return <div>
//                 this is doc
//             </div>
//         }

//     }
// }
// @hocComp;
// const Comp3=HOcComp3(Comp1);
// const Listitem=(props)=>{
//     const {item,index}=props;
//     return <li key={index}>{item.name}</li>
// }
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            productlist:[{
                name:"张三"
            },{
                name:"李四"
            }]
        }
    }
    render(){
        // const {productlist}=this.state;
        return <div>
            this is Login   
        </div>
    }
}
export default Login;
