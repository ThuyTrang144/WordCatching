import { Button, Flex, Heading } from "@chakra-ui/react";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEqual from "lodash.isequal";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface FormHeaderProps {
  title: string;
}

const FormHeader = memo(({ title }: FormHeaderProps) => {
  const navigate = useNavigate();

  return (
    <Flex className="add-form__header">
      <Flex flexDirection="column" alignItems="flex-start">
        <Button
          variant="ghost"
          colorScheme="blue"
          leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
          onClick={() => navigate("/admin")}
        >
          Back
        </Button>
        <Heading fontSize="4xl">{title}</Heading>
      </Flex>
      <Button
        colorScheme="blue"
        type="submit"
        leftIcon={(
          <FontAwesomeIcon
            icon={faCheck}
          />
        )}
      >
        Save
      </Button>
    </Flex>
  );
}, (prevProps, nextProps) => isEqual(prevProps.title, nextProps.title));

export default FormHeader;
