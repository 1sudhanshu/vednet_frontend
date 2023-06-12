import { Card, Col } from "reactstrap";
import { EventTrigger } from "../../../../Constant";
import MegaFormCardBody from "./MegaFormCardBody";
import MegaFormCardFooter from "./MegaFormCardFooter";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { useState } from "react";

const MegaFormsCard = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [selectedMethodId, selectedMethod] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [guardian, setGuardian] = useState('');
  const [chain, setChain] = useState('');
  const [abiFetched, setAbiFetched] = useState(false);
  const [isContractAddressSubmitted,submittedContractAddress] = useState(false);

  const handleChange =(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === 'contractAddress') {
      setContractAddress(value);
      setAbiFetched(value === "" || value.length < 42); // Check if contract address is empty or less than 42 characters
    } else if (name === 'methodId') {
      selectedMethod(value);
      console.log("MethodId value", value);
    } else if (name === 'endpoint') {
      setEndpoint(value);
    } else if (name === 'guardian') {
      setGuardian(value);
    } else if (name === 'chain') {
      setChain(value);
    }
  }

  const handleChangeAfterSubmission = () =>{
    setContractAddress('');
    submittedContractAddress(true);
    selectedMethod('')
    setEndpoint('')
    setGuardian('')
    setChain('')
    console.log(contractAddress);
    console.log(isContractAddressSubmitted)
  }

  return (
    <Col sm="12" md="12" lg="12">
      <Card className="card-custom">
        <HeadingCommon Heading={EventTrigger} />
        <MegaFormCardBody
          contractAddress={contractAddress}
          selectedMethodId={selectedMethodId}
          endpoint={endpoint}
          guardian={guardian}
          chain={chain}
          handleChange={handleChange}
          abiFetched={abiFetched}
          setAbiFetched={setAbiFetched}
          isContractAddressSubmitted = {isContractAddressSubmitted}
          setContractAddress = {setContractAddress}
        />
        {abiFetched && contractAddress.length === 42 && (
          <MegaFormCardFooter
            contractAddress={contractAddress}
            methodId={selectedMethodId}
            endpoint={endpoint}
            guardian={guardian}
            chain={chain}
            handleChangeAfterSubmission ={handleChangeAfterSubmission}

          />
        )}
      </Card>
    </Col>
  );
};

export default MegaFormsCard;
