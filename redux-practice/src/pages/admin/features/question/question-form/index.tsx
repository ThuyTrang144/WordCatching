import {
  Button, FormControl, FormErrorMessage,
  FormLabel, Input, Image, IconButton,
} from "@chakra-ui/react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Question } from "@common-types/question";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import "./styles.css";
import { memo, useState } from "react";
import isEqual from "lodash.isequal";
import FormHeader from "./form-header";

interface QuestionFormProps {
  title: string;
  formData?: Question;
  addNewQuestion?: (question: Question) => void;
}

const QuestionForm = memo(({ title, formData, addNewQuestion }: QuestionFormProps) => {
  const [images, setImage] = useState<ImageListType>([]);
  const [answer, setAnswer] = useState(formData?.answer);

  return (
    <Formik
      initialValues={{ answer: formData?.answer || "" }}
      onSubmit={() => { }}
    >
      <Form className="add-form__container">
        <FormHeader title={title} />
        <div className="add-form__body">
          <FormControl className="add-form__upload-container" isRequired>
            <ImageUploading onChange={() => { }} value={images}>
              {({
                imageList,
                onImageUpload,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                imageList.length ? imageList.map((image, index) => (
                  <div className="add-form__upload-image" key={image.id}>
                    <Image src={image.dataURL} alt={image.alt} />
                    <IconButton
                      colorScheme="red"
                      aria-label="Search database"
                      icon={<FontAwesomeIcon icon={faTrash} />}
                      onClick={() => onImageRemove(index)}
                    />
                  </div>
                )) : (
                  <Button
                    className="add-form__upload"
                    color={isDragging ? "red" : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click to add an image or drag and drop one in this area
                  </Button>
                )
              )}
            </ImageUploading>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="answer">Answer</FormLabel>
            <Input id="answer" placeholder="Enter answer" onChange={() => { }} />
            <FormErrorMessage>Answer is required</FormErrorMessage>
          </FormControl>
        </div>
      </Form>
    </Formik>
  );
}, (prevProps, nextProps) => (isEqual(prevProps.formData, nextProps.formData)
  && isEqual(prevProps.title, nextProps.title)));

export default QuestionForm;
