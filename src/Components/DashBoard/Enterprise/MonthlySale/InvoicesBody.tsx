import { H4, LI, P, UL } from "../../../../AbstractElements";

const InvoicesBody = () => {
  return (
    <UL className="flex-row simple-list">
      <LI>
        <P>Due</P>
        <H4>
          $<span className="counter">54612</span>
        </H4>
      </LI>
      <LI>
        <P>Overdue</P>
        <H4>
          $<span className="counter">61271</span>
        </H4>
      </LI>
    </UL>
  );
};

export default InvoicesBody;
