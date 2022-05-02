import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from 'react';
import { motion } from "framer-motion";
//Animate

//Hero
const containerHero = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const itemHero = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemHeroImg = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: 200,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 1,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};


export default function Contact() {
    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  



  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("Message is required")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };


  const { register, handleSubmit,  formState } = useForm(formOptions);
  const { errors } = formState;
  

  function onSubmit(data) {
 
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
         <motion.div
        className="content"
        variants={containerHero}
        initial="hidden"
        animate="show"
        exit="exit"
      >
      <div className="content">
      <div className="container__hero history">
        <div className="hero__content">
          <div className="hero__image">
          <motion.div variants={itemHeroImg}>
            <div className="background contact"></div>
            </motion.div>
          </div>
          <div className="hero__text">
          <motion.div variants={itemHero}>
            <h1>Contact</h1>
            </motion.div>
          </div>
        </div>
      </div>
        <section className="contact">
          
          <form onSubmit={handleSubmit(onSubmit)}>
          <motion.div variants={itemHero}>
            <h2>Write something</h2>
            </motion.div>
          <motion.div variants={itemHero}>
            <div className="form-row">
            <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
                {/* <label>First Name</label> */}
                <input
                placeholder="First name"
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                />
              
           
           
                {/* <label>Last Name</label> */}
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
                <input
                placeholder="Last name"
                  name="lastName"
                  type="text"
                  {...register("lastName")}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                />
             
            
            </div>
            </motion.div>
            <motion.div variants={itemHero}>
            <div className="form-row">
           
                {/* <label>Email</label> */}
                <div className="invalid-feedback">{errors.email?.message}</div>
                <input
                placeholder="Email"
                  name="email"
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                
           
            </div>
            </motion.div>
            <motion.div variants={itemHero}>
            <div className="form-row">
           
                {/* <label>Message</label> */}
                <div className="invalid-feedback">{errors.message?.message}</div>
                <textarea
                placeholder="Message"
                  name="message"
                  type="textarea"
                  {...register("message")}
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                />
      
            </div>
            </motion.div>
            <div className="btn-container-form">
              <button type="submit" className="btn btn-form">
                Send message
              </button>
            
            </div>
          </form>
        </section>
      </div>
      </motion.div>
    </div>
  );
}
