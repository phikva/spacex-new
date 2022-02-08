import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from 'react';






export default function Contact() {
    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  



  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("Message is required")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  

  function onSubmit(data) {
    // display form data on success
    alert("Message sendt\n\n");
    console.log(data);
    fetch('/api/contactApi', {
        method: 'post',
        body: JSON.stringify(data),
      });
    //   reset();
    return false;
  }

  return (
    <div className="main">
      <div className="content">
        
        <section className="contact">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  {...register("lastName")}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  type="textarea"
                  {...register("message")}
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.message?.message}</div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-1">
                Send message
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="btn btn-secondary"
              >
                Reset
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
