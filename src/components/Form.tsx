import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
}

export const Form = () => {

  const { form, handleChange } = useForm<FormData>({
    email: 'marianela@gmail.com',
    name: 'Marianela'
  });

  const { email, name } = form;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input  type="email"
                className="form-control" 
                name="email"
                value= { email }
                onChange = { handleChange }
              />
      </div>

      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input  type="text"
                className="form-control" 
                name="name"
                value= { name }
                onChange = { handleChange }
              />
      </div>
      
      <pre>{ JSON.stringify(form) }</pre>

    </form>
  )
}
