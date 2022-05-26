import { QUESTION_LIST } from "@constants/question";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentWrapper from "./components/content-wrapper";
import SideBar from "./components/sidebar";
import QuestionTable from "./features/question/question-table";
import "./styles.css";

export default function AdminPage() {
  return (
    <div className="admin-page">
      <SideBar />
      <main className="admin-page__content">
        <ContentWrapper
          title="Questions"
          note="1 item found"
          button={{
            name: "Create new item",
            icon: <FontAwesomeIcon icon={faPlus} />,
          }}
        >
          <QuestionTable questions={QUESTION_LIST} />
        </ContentWrapper>
      </main>
    </div>
  );
}
