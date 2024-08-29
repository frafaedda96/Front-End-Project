import React, {useState} from 'react';

const Register = () =>{

  const [save, setSave] = useState(false)

  const [formData, setFormData] = useState({
    regemail: "",
    regpassword: "",
    nome: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const ShowName = () => {
    setSave(true)
  }


    
  return(
    <>
      <form className="m-10 flex flex-col w-[40%]  ml-auto mr-auto justify-items-center justify-center border-solid border-black border-2 p-10" onSubmit={handleSubmit}>
        <h1 className='text-5xl font-bold text-center mb-10'>Registrazione</h1>
        <label htmlFor="regemail">E-mail</label>
        <input className="m-2 border-solid border-gray-400 border-2 mb-5"
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="regemail"
          id="regemail"
        />

        <label htmlFor="nome">Nome utente</label>
            <input className=" m-2 border-solid border-gray-400 border-2"
            onChange={handleChange}
            value={formData.nome}
            type="text"
            name="nome"
            id="nome"
        />

        <label htmlFor="regpassword">Password</label>
        <input className=" m-2 border-solid border-gray-400 border-2"
          onChange={handleChange}
          value={formData.password}
          type="password"
          name="regpassword"
          id="regpassword"
        />
        <input className="w-20 border-solid border-2 border-gray-400 ml-auto mr-auto hover:bg-green-600 hover:text-white active:bg-green-900 mt-20" onClick={ShowName} type="submit" value="Register" />
        {
            save &&(<p>L'utente si è registrato con le seguenti informazioni: <br/>Email: {formData.regemail}, <br/> Nome Utente: {formData.nome}, <br/> Password: {formData.regpassword}</p>)
        }
      </form>
    </>
  )  };


export default Register;