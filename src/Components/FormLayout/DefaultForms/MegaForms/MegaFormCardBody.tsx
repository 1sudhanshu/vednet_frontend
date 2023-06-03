import { H6 } from "../../../../AbstractElements";
import {AccountInformation,Chain,MethodId,Gaurdian,ContractAddress,Endpoint} from "../../../../Constant";
import { CardBody, Form,Input } from "reactstrap";
import MegaFormCommon from "./common/MegaFormCommon";
import { useEffect, useState } from "react";
import {ethers} from 'ethers';

interface Method {
  methodName: string;
  methodId: string;
}


interface MegaFormsCardProps {
  contractAddress: string;
  selectedMethodId:string;
  endpoint:string;
  gaurdian:string;
  chain:string;
  handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const MegaFormCardBody:React.FC<MegaFormsCardProps> = ({contractAddress,selectedMethodId,endpoint,gaurdian,chain,handleChange}) => {
  
  const [methodIds, setMethodIds] = useState<Method[]>([]);

  useEffect(()=>{
    if(contractAddress.length === 42){
      fetchSmartContract(contractAddress);
    }
  },[contractAddress])

  const fetchSmartContract = async(contractAddress:string) => {
    try{
      const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${"VRM64BUPQV99D28R47CKDINBMDD4VMMXFA"}`);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
   
    const abi =JSON.parse(data.result);
    
    const finalListOfMethodIdAndMethodName =[];
    for(let contract of abi){
      if (contract.type === 'function') {
         const methodSignature = `${contract.name}(${contract.inputs.map((input: any) => input.type).join(',')})`;
        const methodId = ethers.keccak256(ethers.toUtf8Bytes(methodSignature)).substring(0, 10);
        const tempObj ={
          methodName:contract.name,
          methodId:methodId
        }
        finalListOfMethodIdAndMethodName.push(tempObj)
      }
    }
     setMethodIds(finalListOfMethodIdAndMethodName);
     return finalListOfMethodIdAndMethodName;
   
  } catch (error) {
  }
  };


  return (
    <CardBody>
      <Form className="theme-form mega-form">
        <H6>{AccountInformation}</H6>
        <MegaFormCommon label={ContractAddress} name="contractAddress" type="text" placeholder="0xe688b84b23f322a9s4as3dcf8e15fa82cdb7...." onChange={handleChange}/>

        <div className="form-group">
          <label htmlFor="methodId">{MethodId}</label>
          <Input type="select" id="methodId" value={selectedMethodId} name="methodId" onChange={handleChange}>
            <option value="">Select...</option>
            {methodIds.map((method) => (
              <option key={method.methodId} value={method.methodId}>
                {method.methodName}
              </option>
            ))}
          </Input>
        </div>
        {/* <MegaFormCommon label={MethodId} type="text" placeholder="0xe688b84b23f322a994a53dbf8e16fa82ddb7...." /> */}
        <MegaFormCommon label={Endpoint} type="text" value={endpoint} name="endpoint" placeholder="https://example.com" onChange={handleChange} />
        <MegaFormCommon label={Gaurdian} type="text"value={gaurdian}  name="gaurdian" placeholder="0xe688b84b23f322a994a53dbf8e16fa82ddb7...." onChange={handleChange} />

        <div className="form-group">
          <label htmlFor="chain">{Chain}</label>
          <Input type="select" id="chain" value={chain}>
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
