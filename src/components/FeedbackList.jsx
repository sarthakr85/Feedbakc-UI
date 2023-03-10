import { useContext } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
// import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <LazyMotion features={domAnimation}>
        {feedback.map((item) => (
          <m.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
}

// Proptypes no longer needed when using context
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     }).isRequired
//   ),
// };
export default FeedbackList;
