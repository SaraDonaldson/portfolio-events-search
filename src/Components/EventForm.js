import React, { useState, createContext } from "react";

export const FormContext = createContext({
  form: {},
});

export default function Form({
  children,
  formInitialValues,
  submit,
  onFormChange,
}) {
  const [form, setForm] = useState(formInitialValues);
  const handleFormChange = (event, formData) => {
    // If user is clicking on html el instead of form el,
    // take formData values not event.target
    const updatedForm = {
      ...form,
      [event.target?.name || formData.name]:
        event.target?.value || formData.value,
    };
    console.log("Form updated", updatedForm);
    //Callback
    onFormChange && onFormChange(updatedForm);
    // Update state
    setForm(updatedForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    setForm(formInitialValues);
    return form;
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
          handleSubmit,
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  );
}
