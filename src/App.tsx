import { Flex, Heading, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function App() {
  return (
    <Theme accentColor="green">
      <Flex direction="column" gap="2">
        <Heading>react-app-template</Heading>
        <Text>A wonderful application.</Text>
      </Flex>
    </Theme>
  );
}
