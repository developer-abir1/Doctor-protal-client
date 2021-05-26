import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppoinmetFrom.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppoinmentFrom = ({
  modalIsOpen,
  closeModal,
  apponimentOn,
  apponimentTime,
  apponimentSpaces,
  date,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
    console.log(data);
    closeModal()
    
  };


  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modalFrom">
          
          <h2 className="text-center text-brand text-uppercase">
            {apponimentOn}
          </h2>

          <div>
            <small className="ms-4"><strong> {date.toDateString()}</strong></small>
            <br />
            <small className="ms-4">{apponimentTime}</small>
            <br />
            <small className="ms-4 text-secondary text-uppercase">
              {apponimentSpaces} Available spaces
            </small>
          </div>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Your Name"
                className="form-control"
              />
              <br />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                {...register("phone", { required: true })}
                name="phone"
                placeholder="Phone Number"
                className="form-control"
              />
              <br />
              {errors.phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <br />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group row">
              <div className="col-4">
                <select
                  className="form-control"
                  name="gender"
                  {...register("gender", { required: true })}
                >
                  <option disabled={true} value="Not set">
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not set">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="col-4">
                <input
                  {...register("age", { required: true })}
                  className="form-control"
                  name="age"
                  placeholder="Your Age"
                  type="number"
                />
                {errors.age && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="col-4">
                <input
                  {...register("weight", { required: true })}
                  className="form-control"
                  name="weight"
                  placeholder="Weight"
                  type="number"
                />
                {errors.weight && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>

            <div className="form-group text-right">
              <br />
              <button type="submit" className="btn btn-brand float-end">
                Send
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AppoinmentFrom;
