"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitStatus, setSubmitStatus] = useState(null);

  const form = useRef();
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        //general service id and template id
        "aura",
        "contact",
        form.current,
        {
          publicKey:
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY_SERENENEROINK_AND_CONTACT,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitStatus({
            type: "success",
            message: "Your message has been sent successfully!",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitStatus({
            type: "error",
            message:
              "There was an error sending your message. Please try again later.",
          });
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form form-start"
      ref={form}
    >
      <div className="form__input-group">
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input
          className={`form__input ${errors.name ? "form__input--error" : ""}`}
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          aria-invalid={errors.name ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.name && (
            <span className="form__error" role="alert">
              {errors.name?.message}
            </span>
          )}
        </div>
      </div>

      <div className="form__input-group">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          className={`form__input ${errors.email ? "form__input--error" : ""}`}
          id="email"
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          aria-invalid={errors.email ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.email && (
            <span className="form__error" role="alert">
              {errors.email.type === "required"
                ? "Email is required"
                : "Please enter a valid email address"}
            </span>
          )}
        </div>
      </div>

      <div className="form__input-group">
        <label htmlFor="subject">
          Subject <span>*</span>
        </label>
        <input
          className={`form__input ${
            errors.subject ? "form__input--error" : ""
          }`}
          id="subject"
          type="text"
          {...register("subject", { required: "Subject is required" })}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.subject && (
            <span className="form__error" role="alert">
              {errors.subject?.message}
            </span>
          )}
        </div>
      </div>

      <div className="form__input-group">
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea
          className={`form__textarea ${
            errors.message ? "form__textarea--error" : ""
          }`}
          id="message"
          rows="6"
          {...register("message", { required: "Message is required" })}
          aria-invalid={errors.message ? "true" : "false"}
          aria-required="true"
        />
        <div className="form__error-box">
          {errors.message && (
            <span className="form__error" role="alert">
              {errors.message?.message}
            </span>
          )}
        </div>
      </div>

      <button type="submit" className="btn btn__umber">
        Submit
      </button>
      <div className="form__submit-status">
        {submitStatus && (
          <span
            className={`form__submit-status__message ${
              submitStatus.type === "success"
                ? "form__submit-status__message--success"
                : "form__submit-status__message--error"
            }`}
          >
            {submitStatus.message}
          </span>
        )}
      </div>
    </form>
  );
}
