import CommonErrorPage from "../common/CommonErrorPage";

const Error403 = () => {
  return (
    <CommonErrorPage
      tittle={403}
      tittleClassName="font-success"
      BtnClassName="btn-success-gradien"
    />
  );
};

export default Error403;
