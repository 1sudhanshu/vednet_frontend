import { H6 } from "../../../../AbstractElements";
import {AccountInformation,Chain,MethodId,Gaurdian,ContractAddress,Endpoint} from "../../../../Constant";
import { CardBody, Form,Input } from "reactstrap";
import MegaFormCommon from "./common/MegaFormCommon";
import { useEffect, useState } from "react";
import {ethers} from 'ethers';
const MegaFormCardBody = () => {

  const [contractAddress, setContractAddress] = useState('');

  useEffect(()=>{
    if(contractAddress.length === 42){
      fetchSmartContract(contractAddress);
    }
  },[contractAddress])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContractAddress(event.target.value);
    
  };


  

  const fetchSmartContract = async(contractAddress:string) => {
    // Your API call logic goes here
    console.log('Calling API...');
    try{
      const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${"VRM64BUPQV99D28R47CKDINBMDD4VMMXFA"}`);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
   
    console.log(JSON.parse(data.result));

    for(let contract of data.result){
      console.log(contract.signature);
      const methodId = ethers.keccak256(contract.signature).substring(0, 10);
      console.log(methodId);

    }
   
  } catch (error) {
  }
  };


  return (
    <CardBody>
      <Form className="theme-form mega-form">
        <H6>{AccountInformation}</H6>
        <MegaFormCommon label={ContractAddress} type="text" placeholder="0xe688b84b23f322a9s4as3dcf8e15fa82cdb7...." onChange={handleChange}/>


        <div className="form-group">
          <label htmlFor="chain">{MethodId}</label>
          <Input type="select" id="chain">
            <option value="0xe688b84b23f322a994a53dbf8e16fa82ddb7432">0xe688b84b23f322a994a53dbf8e16fa82ddb7432</option>
            <option value="0xe688b84b23f322a994a53dbf8e16fa82ddb7853">0xe688b84b23f322a994a53dbf8e16fa82ddb7853</option>
            <option value="0xe688b84b23f322a994a53dbf8e16fa82ddb7678">0xe688b84b23f322a994a53dbf8e16fa82ddb7678</option>
            {/* Add more options as needed */}
          </Input>
        </div>
        {/* <MegaFormCommon label={MethodId} type="text" placeholder="0xe688b84b23f322a994a53dbf8e16fa82ddb7...." /> */}
        <MegaFormCommon label={Endpoint} type="text" placeholder="https://example.com" />
        <MegaFormCommon label={Gaurdian} type="text" placeholder="0xe688b84b23f322a994a53dbf8e16fa82ddb7...." />

        <div className="form-group">
          <label htmlFor="chain">{Chain}</label>
          <Input type="select" id="chain">
            <option value="Polygon">Polygon</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Binance Smart Chain">Binance Smart Chain</option>
            {/* Add more options as needed */}
          </Input>
        </div>
        {/* <MegaFormCommon label={Chain} type="text" placeholder="Polygon" /> */}
      </Form>
    </CardBody>
  );
};
export default MegaFormCardBody;
