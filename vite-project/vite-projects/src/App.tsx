import { useForm} from "react-hook-form"
import './App.css'


function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  
  async function onSubmit(data) {
    await new Promise((resolve => setTimeout(resolve, 6000)));
    console.log("submitting the form", data);
  }

  return (
   <form onSubmit = {handleSubmit(onSubmit)}>
    <div>
      <label>FirstName:</label>
      <input {...register("firstName",
        {
          required: true,
          minLength: {value:3, message:"Enter proper name"},
          maxLength: 40
        })}/>
        {
          errors.firstName &&  <p>{errors.firstName.message} </p>
        }
    </div>
    <br/>
    <div>
      <label>MiddleName:</label>
      <input {...register("middleName",
        {
          minLength: {value:3, message:"Enter proper middlename"},
        })}/>
        {
          errors.middleName &&  <p>{errors.middleName.message} </p>
        }
    </div>
    <br/>
    <div>
      <label>LastName:</label>
      <input {...register("lastName", 
        {
          required: true,
          minLength: {value:3, message:"Enter proper lastname"},
          maxLength: 40
        })}/>
        {
          errors.lastName &&  <p>{errors.lastName.message} </p>
        }
    </div>
    <br/>
    <div>
      <label>Address:</label>
      <input {...register("address",
      {
          required: true, 
          maxLength:{value: 40, message:"Enter proper address"}
        
        })}/>
        {
          errors.address &&  <p>{errors.address.message} </p>
        }
    </div>
    <br/>
    <div>
      <label>Phone-Number:</label>
      <input {...register("phoneNumber")} />
    </div>
    <br/>
    <div>
      <label>Password:</label>
      <input {...register("password")}/>
    </div>
    <br/>
    <input type = "Submit"  disabled={isSubmitting}
    value={isSubmitting ? "Submitting" : "Submit"}
    />
   </form> 
  )
}

export default App
