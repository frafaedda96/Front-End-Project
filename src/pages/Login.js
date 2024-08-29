import React, {useState, useEffect} from 'react';

const Login = () =>{

  const [save, setSave] = useState(false)        

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Modulo Inviato:", formData);

  };

  const ShowName = () => {
    setSave(true)
    
  }



  return(
    <>
      <form className="m-10 flex flex-col w-[40%] ml-auto mr-auto justify-items-center justify-center border-solid border-black border-2 p-10" onSubmit={handleSubmit}>
      <h1 className='text-5xl font-bold text-center mb-10'>Login</h1>
      <label htmlFor="email">E-mail</label>
      <input
      className=  "m-2 border-solid border-gray-400 border-2 mb-5"
        onChange={handleChange}
        value={formData.email}
        type="email"
        name="email"
        id="email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
      className=" m-2 border-solid border-gray-400 border-2"
        onChange={handleChange}
        value={formData.password}
        type="password"
        name="password"
        id="password"
        required
      />
      <input className="w-20 border-solid border-2 border-gray-400 ml-auto mr-auto hover:bg-green-600 hover:text-white active:bg-green-900 mt-20" onClick={ShowName} type="submit" value="Login" />
      {
        save && (<p>L'utente ha fatto l'accesso con le seguenti credenziali: <br />Utente: {formData.email} e Password: {formData.password}</p>)
      }
      </form>
        
    </>
  ) 
};

export default Login;