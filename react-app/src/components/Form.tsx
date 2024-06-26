import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3, {message : 'Name must be at least 3characters'}),
  age: z.number({invalid_type_error : 'Age field is required'}).min(18)
});
type FormData = z.infer<typeof schema>;

// interface FormData {
//   name : string;
//   age : number;
// }

export const Form = () => {
  const { register , handleSubmit, formState : {errors, isValid}} = useForm<FormData>({resolver : zodResolver(schema)});
  // console.log(formState.errors);
  const onSubmit = (data : FieldValues) => console.log(data);

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name : '', age: 0};

  // const handleSubmit = (event : FormEvent) => {
  //   event.preventDefault();
  //   if(nameRef.current !== null)
  //     person.name = nameRef.current.value;
  //   if(ageRef.current !== null)
  //     person.age =parseInt( ageRef.current.value);
  //   console.log(person);
  // }

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          { ...register('name') }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      {errors.name &&  <p className="text-danger">{errors.name.message}</p>}
      {/* {errors.name?.type === 'minLength' &&  <p className="text-danger">The Name must be atleast 3characters</p>} */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          { ...register('age', { valueAsNumber: true}) }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {errors.age &&  <p className="text-danger">{errors.age.message}</p>}
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
