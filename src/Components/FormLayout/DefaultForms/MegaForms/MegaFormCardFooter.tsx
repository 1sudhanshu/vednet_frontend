import React, { useState } from "react";
import { CardFooter, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Submit } from "../../../../Constant";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const MegaFormCardFooter = (props:any) => {
  const { contractAddress, methodId,endpoint,guardian,chain, handleChangeAfterSubmission } = props;

  const showSweetAlert = (): void => {
   Swal.fire({
    title:'Success',
    text: 'Thanks for Submitting!',
    icon:'success',
    background:"#212529",
    confirmButtonColor:"#148df6"
   })
  };

  

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
       //setIsModalOpen(true);
      showSweetAlert();
      handleChangeAfterSubmission();
      // Handle the response from the API
      if (response.ok) {
        // Request was successful
        const data = await response.json();
        //console.log('API response:', data);
      //showSweetAlert();
        
        
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
 
  return (
    <CardFooter>
      <Btn color="primary" className="me-2" onClick={handleSubmit}>
        {Submit}
      </Btn>
      <Btn color="secondary" onClick={handleChangeAfterSubmission}>{Cancel}</Btn>
    </CardFooter>
  );
};

export default MegaFormCardFooter;
