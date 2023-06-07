import { H6 } from "../../../../AbstractElements";
import { AccountInformation, Chain, MethodId, Gaurdian, ContractAddress, Endpoint } from "../../../../Constant";
import { CardBody, Form, Input } from "reactstrap";
import MegaFormCommon from "./common/MegaFormCommon";
import { useEffect, useState } from "react";
import { ethers } from 'ethers';

interface Method {
  methodName: string;
  methodId: string;
}

interface MegaFormsCardProps {
  contractAddress: string;
  selectedMethodId: string;
  endpoint: string;
  gaurdian: string;
  chain: string;
  abiFetched:boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setAbiFetched: (value: boolean) => void;
}

const MegaFormCardBody: React.FC<MegaFormsCardProps> = ({ contractAddress, selectedMethodId, endpoint, gaurdian, chain, handleChange, abiFetched,setAbiFetched  }) => {

  const [methodIds, setMethodIds] = useState<Method[]>([]);


  useEffect(() => {
    if (contractAddress.length === 42) {
      fetchSmartContract(contractAddress);
    } else {
      setAbiFetched(false);
    }
  }, [contractAddress]);

  const fetchSmartContract = async (contractAddress: string) => {
    try {
      const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${"VRM64BUPQV99D28R47CKDINBMDD4VMMXFA"}`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();

      const abi = JSON.parse(data.result);

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
        setAbiFetched(true);
      } else {
        setAbiFetched(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardBody>
      <Form className="theme-form mega-form">
        <H6>{AccountInformation}</H6>
        <MegaFormCommon label={ContractAddress} name="contractAddress" type="text" placeholder="0xe688b84b23f322a9s4as3dcf8e15fa82cdb7...." onChange={handleChange} />

        {!abiFetched && contractAddress.length === 42 &&(
          <MegaFormCommon label="ABI Not Found" type="textarea" placeholder="ABI not found for the entered contract address." />
        )}
        { abiFetched && (
          <>
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

            <MegaFormCommon label={Endpoint} type="text" value={endpoint} name="endpoint" placeholder="https://example.com" onChange={handleChange} />

            <MegaFormCommon label={Gaurdian} type="text" value={gaurdian} name="gaurdian" placeholder="0xe688b84b23f322a994a53dbf8e16fa82ddb7...." onChange={handleChange} />

            <div className="form-group">
              <label htmlFor="chain">{Chain}</label>
              <Input type="select" id="chain" value={chain} name="chain" onChange={handleChange}>
                <option value="Polygon">Polygon</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Binance Smart Chain">Binance Smart Chain</option>
                {/* Add more options as needed */}
              </Input>
            </div>
          </>
        )}
      </Form>
    </CardBody>
  );
};

export default MegaFormCardBody;
