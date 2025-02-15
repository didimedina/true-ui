import { Info } from "@phosphor-icons/react";
import { Alert } from "@true-ui/components/alert";

export const BasicAlert = (props: Alert.RootProps) => {
  return (
    <Alert.Root {...props}>
      <Alert.Icon asChild>
        <Info />
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>Browser Update available</Alert.Title>
        <Alert.Description>
          For the best experience, please update your browser.
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
};
