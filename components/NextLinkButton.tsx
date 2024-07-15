const NextLinkButton = (props: ComponentProps<typeof Button>) => {
  const { isDisabled } = props;
  if (isDisabled) {
    return <Button as="a" {...props} href={undefined} />;
  }
  return <Button as={NextLink} {...props} />;
};