import { Heading, Text, Button } from "@chakra-ui/react";
import "./styles.css";

interface ContentWrapperProps {
  title: string;
  note?: string;
  children: JSX.Element | JSX.Element[];
  button: {
    name: string;
    icon?: JSX.Element;
  }
}
export default function ContentWrapper({
  title, note,
  children, button,
}: ContentWrapperProps) {
  return (
    <div className="content-wrapper">
      <div className="content-wrapper__header">
        <div>
          <Heading fontSize="5xl">{title}</Heading>
          <Text>{note}</Text>
        </div>
        <Button colorScheme="blue" leftIcon={button.icon}>{button.name}</Button>
      </div>
      <div className="content-wrapper__body">
        {children}
      </div>
    </div>
  );
}
