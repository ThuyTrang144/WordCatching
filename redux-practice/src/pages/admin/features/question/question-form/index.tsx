import {
  Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, Image, IconButton, Flex,
} from "@chakra-ui/react";
import { Question } from "@common-types/question";
import { faCheck, faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import "./styles.css";

interface QuestionFormProps {
  title: string;
  formData?: Question;
}

export default function QuestionForm({ title, formData }: QuestionFormProps) {
  return (
    <Formik
      initialValues={{ answer: formData?.answer || "" }}
      onSubmit={() => {}}
    >
      <Form className="add-form__container">
        <Flex className="add-form__header">
          <Heading fontSize="5xl">{title}</Heading>
          <Button colorScheme="blue" leftIcon={<FontAwesomeIcon icon={faCheck} />}>
            Save
          </Button>
        </Flex>
        <div className="add-form__body">
          <FormControl className="add-form__upload-container">
            {formData?.image
              ? (
                <div className="add-form__upload-image">
                  <Image src={formData.image.src} alt={formData.image.alt} />
                  <IconButton
                    colorScheme="red"
                    aria-label="Search database"
                    icon={<FontAwesomeIcon icon={faTrash} />}
                  />
                </div>
              ) : (
                <Button className="add-form__upload">
                  <FontAwesomeIcon icon={faImage} className="add-form__upload-icon" />
                  <Text fontSize="sm">Click to add an image or drag and drop one in this area</Text>
                </Button>

              )}

          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="answer">Answer</FormLabel>
            <Input id="answer" placeholder="Enter answer" />
            <FormErrorMessage>{}</FormErrorMessage>
          </FormControl>
        </div>
      </Form>
    </Formik>
  );
}
