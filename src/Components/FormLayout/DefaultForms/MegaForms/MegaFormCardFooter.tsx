import React from "react";
import { CardFooter } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Submit } from "../../../../Constant";

const MegaFormCardFooter = (props:any) => {
  const { contractAddress, methodId,endpoint,gaurdian,chain } = props;

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
        gaurdian,
        chain,
        user_id

      };

      console.log(formData)

      // Send the form data to the API
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

      // Handle the response from the API
      if (response.ok) {
        // Request was successful
        const data = await response.json();
        console.log('API response:', data);
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
      <Btn color="secondary">{Cancel}</Btn>
    </CardFooter>
  );
};

export default MegaFormCardFooter;
