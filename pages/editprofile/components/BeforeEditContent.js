function BeforeEditContent(props) {
  return (
    <div className="a-before-edit">
      <div className="row a-edit-content a-row-wrapper">
        <div className="col-lg-4 col-sm-12">
          <span className="a-edit-left-title">{props.title}</span>
        </div>
        <div className="col-lg-7 col-sm-10">
          <span
            className={`a-edit-right-content ${
              props.content == "Not Provided" ? "a-not-provided" : null
            }`}
          >
            {props.content}
          </span>
        </div>
        <div className="col-lg-1 col-sm-2">
          <button className="a-edit" onClick={props.editButtonClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeforeEditContent;
