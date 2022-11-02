import Button from "../Button";

export default function FooterListItem({ props }) {
  const { title, text, largeTitle, subtitle } = props;

  return (
    <>
      {title ? <Button isFooterTitle inner={text} /> : null}
      {largeTitle ? <Button isFooterLargeTitle inner={text} /> : null}
      {subtitle ? <Button isFooterSubTitle inner={text} /> : null}
    </>
  );
}
