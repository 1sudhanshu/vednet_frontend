import React from "react";
import { CardFooter } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Submit } from "../../../../Constant";

const MegaFormCardFooter = (props:any) => {
  const { contractAddress, methodId,endpoint,gaurdian,chain } = props;

  const handleSubmit = async () => {
    try {
      // Prepare the form data object
      const formData = {
        contractAddress,
        methodId,
        endpoint,
        gaurdian,
        chain
      };

      console.log(formData)

      // Send the form data to the API
      const response = await fetch('https://api.example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
