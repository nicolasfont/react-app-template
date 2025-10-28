import { Theme as RadixTheme, type ThemeProps } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export function Theme(props: ThemeProps) {
  return <RadixTheme accentColor="green" {...props} />;
}
