import React, { useState } from "react";
import { CardFooter, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Submit } from "../../../../Constant";

const MegaFormCardFooter = (props:any) => {
  const { contractAddress, methodId,endpoint,guardian,chain, handleChangeAfterSubmission } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      // Prepare the form data object
      const user_id ="1";
      const contract_address =contractAddress
      const method_id = methodId
      const formData = {
        contract_address,
        method_id,
        endpoint,
        guardian,
        chain,
        user_id

      };

  
      // Send the form data to the API- PUT the endpoint here
      const response = await fetch('https://5312-49-207-230-123.ngrok-free.app/v1/coordinator/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Acess-Control-Allow-Origin':'*',
          'X-VedNet-Userid':'1',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors',
      });
       setIsModalOpen(true);
      // Handle the response from the API
      if (response.ok) {
        // Request was successful
        const data = await response.json();
        //console.log('API response:', data);
        //setIsModalOpen(true);
        
        
      } else {
        // Request failed
        console.error('API request failed:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    // Clear the form fields if needed
    // setContractAddress('');
    // setMethodId('');
  };
  const closeModal = () => {
    setIsModalOpen(false);
    handleChangeAfterSubmission(); // Close the modal
  };

  return (
    <CardFooter>
      <Btn color="primary" className="me-2" onClick={handleSubmit}>
        {Submit}
      </Btn>
      <Btn color="secondary" onClick={handleChangeAfterSubmission}>{Cancel}</Btn>

      <Modal isOpen={isModalOpen} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Submission Successful</ModalHeader>
        <ModalBody>
          Thanks for submitting details!
        </ModalBody>
      </Modal>
    </CardFooter>
  );
};

export default MegaFormCardFooter;
