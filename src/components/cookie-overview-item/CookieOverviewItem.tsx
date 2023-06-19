import { component$ } from "@builder.io/qwik";
import { CellCookie, CellDescription, CellDuration, Wrapper } from "~/components/cookie-overview-item/styles.css";

interface Props {
  cookie: string;
  duration: string;
  description: string;
}
export default component$<Props>(({
  cookie,
  duration,
  description
}) => {
  return (
    <Wrapper>
      <CellCookie>{cookie}</CellCookie>
      <CellDuration>{duration}</CellDuration>
      <CellDescription>{description}</CellDescription>
    </Wrapper>
  );
})