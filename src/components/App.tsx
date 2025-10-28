import { Flex, Heading, Text } from "@radix-ui/themes";
import { Theme } from "./Theme";

export function App() {
  return (
    <Theme>
      <Flex direction="column" gap="2">
        <Heading>react-app-template</Heading>
        <Text>A wonderful application.</Text>
      </Flex>
    </Theme>
  );
}
