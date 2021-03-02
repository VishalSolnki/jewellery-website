//  import React,{useState,useEffect} from 'react'
//  import { axios } from "axios";
//  import Header from './Header';
//  function Rate() {
     
//             var myHeaders = new Headers();
//             myHeaders.append("x-access-token", "goldapi-19d1rruklnmt1vx-io");
//             myHeaders.append("Content-Type", "application/json");

//             var requestOptions = {
//             method: 'GET',
//             headers: myHeaders,
//             redirect: 'follow'
//             };

//             fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
//             .then(response => response.text())
//             .then(result =>{
//                 console.log(result)
//                 let objRes = JSON.parse(result); 
//                 console.log(objRes.currency);
//                 console.log(objRes.open_price);
//                 // <div className="rate">
//                 // gold rate is :{result};
//                 // </div>
//                 document.write(objRes.currency)
//                //window.alert(result.getAttribute("currency"))
//                return;
//             })
//             .catch(error => console.log('error', error));
//         return(
//             document.write("nhi hua")
//         )
//  }
 
//  export default Rate


import React,{Component} from 'react'
import "./Rate.css";
import CurrencyFormat from "react-currency-format";
import Payment from './Payment';
class Rate extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,

        }
    }

    componentDidMount(){
        // fetch('https://metals-api.com/api/latest? access_key = o83q51t95rg06dnu0bckb4jt55x3tnx3rfwg33l1vmxocotcf33fww5nt3dd')
        //fetch('http://goldprice.org/NewCharts/gold/images/goldsilverpricesforcalculators.txt')
        // .then(res=> this.setState({
        //     isLoaded:true,
        //     items:res.items,
        // }))
            var myHeaders = new Headers();
            myHeaders.append("x-access-token", "goldapi-19d1rruklnmt1vx-io");
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };
        //fetch('https://www.breakingbadapi.com/api/characters')
        //fetch('https://www.goldapi.io/api/:metal/:currency/[:date]',requestOptions)
        fetch('https://www.goldapi.io/api/XAU/INR',requestOptions)
            .then(res=> res.json())
            .then(json=>{
                console.log("Print the json",json);
                this.setState({
                    isLoaded:true,
                    items:json,
                })
            })
            .catch(err => console.log(err) )
    }
    render(){
        var{isLoaded,items}=this.state;
        //this.setState({isLoaded:true,items:json});
        if(!isLoaded){
            return<div>Loading...</div>;
        }
        else{
            return(
                <div className="Rate">
                    DATA IS LOADED SUCCESSFULLY
                    
                    
                    
                    <ul>
                        
                        <li>
                            <div className="currency">
                            { items.currency }
                            </div>
                            <div className="open_price">
                            
                            { ((items.open_price)/28.349)-.000961339025 }
                            </div>
                            <Link to={{
                                pathname:"/Payment",
                                data:((items.open_price)/28.349)-.000961339025 
                            }}>
                            </Link>
                            
                        </li>
                    </ul>
                  
                   
                </div>
                
            );
        }

        
        
}
}
export default Rate
