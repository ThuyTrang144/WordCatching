import FormHeader from "./form-header";
import isEqual from "lodash.isequal";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {
  Button, FormControl, FormErrorMessage,
  FormLabel, Input, Image, IconButton,
} from "@chakra-ui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Question } from "@common-types/question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import { memo, useState } from "react";
import "./styles.css";

interface QuestionFormProps {
  title: string;
  formData?: Question;
  addNewQuestion?: (question: Question) => void;
}

function QuestionForm({ title, formData }: QuestionFormProps) {
  const [images] = useState<ImageListType>([]);

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
}

export default memo(
  QuestionForm,
  (prevProps, nextProps) => (isEqual(prevProps.formData, nextProps.formData)
  && isEqual(prevProps.title, nextProps.title)),
);
