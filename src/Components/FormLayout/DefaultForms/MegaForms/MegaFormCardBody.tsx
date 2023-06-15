import { H6, P } from "../../../../AbstractElements";
import { AccountInformation, Chain, MethodId, Guardian, ContractAddress, Endpoint } from "../../../../Constant";
import { CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, Input } from "reactstrap";
import MegaFormCommon from "./common/MegaFormCommon";
import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import Web3 from 'web3';


interface Method {
  methodName: string;
  methodId: string;
}

interface MegaFormsCardProps {
  contractAddress: string;
  selectedMethodId: string;
  endpoint: string;
  guardian: string;
  chain: string;
  abiFetched:boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  setAbiFetched: (value: boolean) => void;
  setContractAddress : (value: string) => void;
  isContractAddressSubmitted:boolean;

}
const web3 = new Web3();


const MegaFormCardBody: React.FC<MegaFormsCardProps> = ({ contractAddress, selectedMethodId, endpoint, guardian, chain, handleChange, abiFetched,setAbiFetched, isContractAddressSubmitted,setContractAddress}) => {

  const [methodIds, setMethodIds] = useState<Method[]>([]);
  const [abiValid, setAbiValid] = useState("null");
  const [proxyContractState, setProxyContractState] = useState(false);
  const [chainDropdownOpen, setChainDropdownOpen] = useState(false);
  const [implementationContractAddress, setImplementationContractAddress] = useState('');
  const toggleChainDropdown = () => setChainDropdownOpen(!chainDropdownOpen);

  useEffect(() => {
    if (contractAddress.length === 42) {
      fetchSmartContract(contractAddress);
      setMethodIds([]);
      setAbiValid("null");
      setProxyContractState(false);
    } else {
      setAbiFetched(false);
    }
  }, [contractAddress]);

  const fetchSmartContract = async (contractAddress: string) => {
    try {
      const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${process.env.ETHERSCAN_API_KEY}`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      if(data.result[0].Implementation != ""){
        // Proxy contract
        setProxyContractState(true);
        setImplementationContractAddress(data.result[0].Implementation)
       // setContractAddress(data.result[0].Implementation)
      }else{
        const abiParsed = fetchMethodIdsFromAbi(data.result[0].ABI)
      if(abiParsed){
        setAbiFetched(true);
      }else{
        setAbiFetched(false);
      }

      }
      
      
    } catch (error) {
      console.log(error);
    }
  };

  // To get the methodIds from ABIs
  const fetchMethodIdsFromAbi = ( enteredAbi:string)=>{
    const abi = JSON.parse(enteredAbi)
    try{
      if (abi && abi.length > 0) {
        const finalListOfMethodIdAndMethodName = [];
        for (let contract of abi) {
          if (contract.type === 'function') {
            const methodSignature = `${contract.name}(${contract.inputs.map((input: any) => input.type).join(',')})`;
            const methodId = ethers.keccak256(ethers.toUtf8Bytes(methodSignature)).substring(0, 10);
            const tempObj = {
              methodName: contract.name,
              methodId: methodId
            };
            finalListOfMethodIdAndMethodName.push(tempObj);
          }
        }
        setMethodIds(finalListOfMethodIdAndMethodName);
       return true;
      } else {
        return false;
      }

    }catch(error){
      console.log(error);
    }
  }

  //To validate the ABI entered by the user
  const handleAbiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleChange(event);
    
    if(value=== ""){
      setAbiValid("null");
    }
    else{
      validateAbi(value.trim());
    }
   
  };

  const validateAbi = (value: string) => {
    try {
      const abi =JSON.parse(value);
        const contract = new web3.eth.Contract(abi);
        
        if(contract){
         
         const abiParsed = fetchMethodIdsFromAbi(value)
         if(abiParsed){
          setAbiValid("true");
          
         }
         
        } 
      
    } catch (error) {
      setAbiValid("false");
    }
  };

  return (
    <CardBody>
       <div className="d-flex justify-content-end mb-3 " >
        <Dropdown isOpen={chainDropdownOpen} toggle={toggleChainDropdown}>
          <DropdownToggle caret >
            {chain ? chain : "Ethereum"}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem style={{color:"#B7B7BA"}}  onClick={() => handleChange({ target  : { name: 'chain', value: 'Ethereum' } }as React.ChangeEvent<HTMLSelectElement>)}>Ethereum</DropdownItem>
            <DropdownItem style={{color:"#B7B7BA"}} onClick={() => handleChange({ target: { name: 'chain', value: 'Polygon' } }as React.ChangeEvent<HTMLSelectElement>)}>Polygon</DropdownItem>
            <DropdownItem style={{color:"#B7B7BA"}} onClick={() => handleChange({ target: { name: 'chain', value: 'Binance Smart Chain' } }as React.ChangeEvent<HTMLSelectElement>)}>Binance Smart Chain</DropdownItem>
            {/* Add more chain options as needed */}
          </DropdownMenu>
        </Dropdown>
      </div>

      <Form className="theme-form mega-form">
        <H6>{AccountInformation}</H6>
        <MegaFormCommon label={ContractAddress} name="contractAddress" type="text" placeholder="0xe688b84b23f322a9s4as3dcf8e15fa82cdb7...." onChange={handleChange} />
       {proxyContractState && <span className="text-danger">This is a proxy contract. Would you like to search the {implementationContractAddress} instead</span>}
        {!abiFetched && contractAddress.length === 42 && (
            <>
              <MegaFormCommon
                  label="ABI Not Found"
                  type="textarea"
                  placeholder="ABI not found for the entered contract address."
                  onChange={handleAbiChange}
              />
            {abiValid === "false" && 
              <span className="text-danger">Invalid ABI format</span>
            }
            {abiValid === "true" && (
                <>
             <div className="form-group">
              <label htmlFor="methodId">{MethodId}</label>
              <Input type="select" id="methodId" value={selectedMethodId} name="methodId" onChange={handleChange}>
                <option value="">Choose the Method</option>
                {methodIds.map((method) => (
                  <option key={method.methodId} value={method.methodId}>
                    {method.methodName}
                  </option>
                ))}
              </Input>
            </div>

            <MegaFormCommon label={Endpoint} type="text" value={endpoint} name="endpoint" placeholder="https://example.com" onChange={handleChange} />

            <MegaFormCommon label={Guardian} type="text" value={guardian} name="guardian" placeholder="0xe688b84b23f322a994a53dbf8e16fa82ddb7...." onChange={handleChange} />

            {/* <div className="form-group">
              <label htmlFor="chain">{Chain}</label>
              <Input type="select" id="chain" value={chain} name="chain" onChange={handleChange}>
                <option value="Polygon">Polygon</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Binance Smart Chain">Binance Smart Chain</option>
                {/* Add more options as needed 
              </Input>
            </div> */}
            </>
            )}
            </>
          )}

        { abiFetched && (
          <>

          {/* <MegaFormCommon label={MethodId} type ="select" value={selectedMethodId} name="methodId" onChange={handleChange} options={methodIds}/> */}
            <div className="form-group">
              <label htmlFor="methodId">{MethodId}</label>
              <Input type="select" id="methodId" value={selectedMethodId} name="methodId" onChange={handleChange}>
                <option value="">Choose the Method</option>
                {methodIds.map((method) => (
                  <option key={method.methodId} value={method.methodId}>
                    {method.methodName}
                  </option>
                ))}
              </Input>
            </div>

            <MegaFormCommon label={Endpoint} type="text" value={endpoint} name="endpoint" placeholder="https://example.com" onChange={handleChange} />

            <MegaFormCommon label={Guardian} type="text" value={guardian} name="guardian" placeholder="0xe688b84b23f322a994a53dbf8e16fa82ddb7...." onChange={handleChange} />

           { /* <div className="form-group">
              <label htmlFor="chain">{Chain}</label>
              <Input type="select" id="chain" value={chain} name="chain" onChange={handleChange}>
                <option value="Polygon">Polygon</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Binance Smart Chain">Binance Smart Chain</option>
                {/* Add more options as needed 
              </Input>
                </div> */}
          </>
        )}
      </Form>
    </CardBody>
  );
};

export default MegaFormCardBody;
