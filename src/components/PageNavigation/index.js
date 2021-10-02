import { GrNext, GrPrevious } from "react-icons/gr";

import "./PageNavigation.css";

const PageNavigation = ({
  onClickPreviousPage,
  onClickNextPage,
  firstPage = false,
  lastPage = false,
}) => {
  return (
    <div className="page-icon-container">
      {firstPage ? (
        <div></div>
      ) : (
        <div className="page-navigation" onClick={onClickPreviousPage}>
          <GrPrevious size={20} />
          <p className="black-text">Back</p>
        </div>
      )}
      {lastPage ? (
        <div></div>
      ) : (
        <div className="page-navigation" onClick={onClickNextPage}>
          <p className="black-text">Next</p>
          <GrNext size={20} />
        </div>
      )}
    </div>
  );
};

export default PageNavigation;
