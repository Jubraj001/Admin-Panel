import { useRef } from 'react';

export default function DeleteModal(props) {
  const { user, refundText, onDelete } = props;
  const ref = useRef(null);
  const refClose = useRef(null);

  const onClickHandler = (e) => {
    refClose.current.click();
    onDelete(user._id);
  };

  return (
    <>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#deleteModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <strong>Remove Booking</strong>
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h5>
                <strong>{refundText}</strong>
              </h5>
              Are you sure you want to remove the booking?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" ref={refClose} data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-danger" onClick={onClickHandler}>
                Remove Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
