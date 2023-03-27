import { v4 as uuidv4 } from "uuid";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Image,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { Question } from "@common-types/question";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form, useFormik } from "formik";
import { memo, useState, ChangeEvent } from "react";
import FormHeader from "./form-header";
import "./styles.css";

interface QuestionFormProps {
  title: string;
  formData?: Question;
  addNewQuestion?: any;
}

function QuestionForm({ title, formData, addNewQuestion }: QuestionFormProps) {
  const [images, setImage] = useState<ImageListType>([]);
  const [answer, setAnswer] = useState(formData?.answer);
  const toast = useToast();

  const onChangeImage = (imageList: ImageListType) => {
    setImage(imageList);
  };

  const onChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleAddQuestionSuccess = () => {
    toast({
      title: "Create new question successfully",
      status: "success",
      isClosable: true,
      position: "top",
    });

    setAnswer("");
    setImage([]);
  };

  const handleSubmitFormData = async () => {
    if (addNewQuestion) {
      const newQuestion = {
        id: uuidv4(),
        answer,
        image: {
          src: images[0].dataURL,
        },
      };
      await addNewQuestion(newQuestion, handleAddQuestionSuccess);
    }
  };

  return (
    <Formik
      initialValues={{ answer: "" }}
      onSubmit={handleSubmitFormData}
    >
      {({ isSubmitting }) => (
        <Form className="add-form__container">
          <FormHeader title={title} isLoading={isSubmitting} />
          <div className="add-form__body">
            <FormControl className="add-form__upload-container">
              <ImageUploading onChange={onChangeImage} value={images}>
                {({
                  imageList,
                  onImageUpload,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (imageList.length ? (
                  imageList.map((image, index) => (
                    <div className="add-form__upload-image" key={image.id}>
                      <Image src={image.dataURL} alt={image.alt} />
                      <IconButton
                        colorScheme="red"
                        aria-label="Search database"
                        icon={<FontAwesomeIcon icon={faTrash} />}
                        onClick={() => onImageRemove(index)}
                      />
                    </div>
                  ))
                ) : (
                  <Button
                    className="add-form__upload"
                    color={isDragging ? "red" : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click to add an image or drag and drop one in this area
                  </Button>
                ))}
              </ImageUploading>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="answer">Answer</FormLabel>
              <Input
                id="answer"
                placeholder="Enter answer"
                onChange={onChangeAnswer}
                value={answer}
              />
              <FormErrorMessage>{}</FormErrorMessage>
            </FormControl>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default memo(QuestionForm);
