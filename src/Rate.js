import React,{Component} from 'react'
import "./Rate.css";
import CurrencyFormat from "react-currency-format";
import Payment from './Payment';
import {Link,useHistory} from "react-router-dom";

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
        fetch('https://www.goldapi.io/api/XAG/INR',requestOptions)
            .then(res=> res.json())
            .then(json=>{
                console.log("Print the json",json);
                this.setState({
                    isLoaded:true,
                    itemssilver:json,
                })
            })
            .catch(err => console.log(err) )
        // 
    }
    render(){
        
        //const history = useHistory();
        var{isLoaded,items}=this.state;
        var{isLoaded,itemssilver}=this.state;
        
        
        //this.setState({isLoaded:true,items:json});
        
        if(!isLoaded){
            return<div>Loading...</div>;
        }
        else{
            //const price= ((items.open_price)/28.349) ;
            const price=(items.open_price);
            const price1=(itemssilver.open_price);
            const silverprice=(itemssilver.low_price);
            
            //const price=5500
            console.log(price)
            console.log(price1)
            console.log(silverprice)
            return(
                
                <div className="Rate" width="100%" >
                    // DATA IS LOADED SUCCESSFULLY
                    <table className="table" border="5px" backgroundcolor="RED" >
                        <tr className="text" >
                            <td>metal type</td>
                            <td >currency type</td>
                            <td>open_price</td>
                            <td>low_Price</td>
                            <td>High_Price</td>
                        </tr>
                        <tr >
                            <td>Gold</td>
                            <td> {items.currency}</td>
                            <td>{price}</td>
                            
                            <td>{items.low_price}</td>
                            <td>{items.high_price}</td>
                            
                        </tr>
                        <tr >
                            <td>Silver</td>
                            <td>{itemssilver.currency}</td>
                            <td>{price1}</td>
                            <td>{itemssilver.low_price}</td>
                            <td>{itemssilver.high_price}</td>
                            
                        </tr>
                        
                        {itemssilver.high_price}
                        
                        
                    </table>
                    // {/* <Payment price={5500}/> */}
                    
                    
                
                    
                    
                            
                           
                    </div>
                        
            )   ;
                    
                
                  
                   
                
                
                
        
        }

        
        
}

}
export default Rate
