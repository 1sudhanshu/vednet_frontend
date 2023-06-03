import { Card, Col } from "reactstrap";
import { EventTrigger } from "../../../../Constant";
import MegaFormCardBody from "./MegaFormCardBody";
import MegaFormCardFooter from "./MegaFormCardFooter";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { useState } from "react";

const MegaFormsCard = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [selectedMethodId ,selectedMethod] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [gaurdian, setGuardian] = useState('');
  const [chain, setChain] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    if (name === 'contractAddress') {
      setContractAddress(value);
    } else if (name === 'methodId') {
      selectedMethod(value);
      console.log("MethodId value", value);
    } else if (name === 'endpoint'){
      setEndpoint(value);
    }else if(name === 'gaurdian'){
      setGuardian(value);
    }else if(name === 'chain'){
      setChain(value);
    }
  }

  return (
    <Col sm="12" md="12" lg ="12">
      <Card className="card-custom">
        <HeadingCommon Heading={EventTrigger} />
        <MegaFormCardBody contractAddress ={ contractAddress} selectedMethodId ={selectedMethodId} endpoint ={endpoint} gaurdian ={gaurdian} chain ={chain} handleChange={handleChange}/>
        <MegaFormCardFooter contractAddress ={ contractAddress} methodId ={selectedMethodId} endpoint ={endpoint} gaurdian ={gaurdian} chain ={chain} />
      </Card>
    </Col>
  );
};

export default MegaFormsCard;
