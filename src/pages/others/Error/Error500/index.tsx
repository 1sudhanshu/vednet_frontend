import CommonErrorPage from "../common/CommonErrorPage";

const Error500 = () => {
  return (
    <CommonErrorPage
      tittle={500}
      tittleClassName="font-primary"
      BtnClassName="btn-primary-gradien"
    />
  );
};

export default Error500;
