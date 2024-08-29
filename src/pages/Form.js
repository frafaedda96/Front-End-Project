
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    date: "",
    priority: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ title: "", body: "", date: "", priority: "" });
  };

  return (
    <>
      <form className="m-10 flex flex-col w-[40%] ml-auto mr-auto justify-items-center justify-center border-solid border-black border-2 p-10" onSubmit={handleSubmit}>
        <h1 className="text-5xl font-bold text-center mb-10">Attività</h1>
        <label htmlFor="title">Titolo:</label>
        <input
          className=" m-2 border-solid border-gray-400 border-2 hover:bg-green-600"
          onChange={handleChange}
          value={formData.title}
          type="text"
          name="title"
          id="title"
          required
        /><br />

        <label htmlFor="body">Descrizione:</label>
        <textarea
          className=" m-2 border-solid border-gray-400 border-2 hover:bg-green-600"
          onChange={handleChange}
          value={formData.body}
          name="body"
          id="body"
        ></textarea><br />

        <label htmlFor="date">Data:</label>
        <input
          className=" m-2 border-solid border-gray-400 border-2 hover:bg-green-600"
          onChange={handleChange}
          value={formData.date}
          type="date"
          name="date"
          id="date"
        /><br />

        <label htmlFor="priority">Priorità:</label>
        <input
          className=" m-2 border-solid border-gray-400 border-2 hover:bg-green-600"
          onChange={handleChange}
          value={formData.priority}
          name="priority"
          id="priority"
        /><br />
        <input className="w-20 border-solid border-2 border-gray-400 ml-auto mr-auto hover:bg-green-600 hover:text-white active:bg-green-900" type="submit" value="Invio" />
      </form>

      <table class="w-[80%] ml-auto mr-auto mt-12">
        <thead class="border-2">
          <tr>
            <th class="border-2 border-solid border-black w-2/12">Titolo</th>
            <th class="border-2 border-solid border-black w-4/12">Descrizione</th>
            <th class="border-2 border-solid border-black w-2/12">Data</th>
            <th class="border-2 border-solid border-black w-2/12">Priorità</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.title}>
              <td class="border-2 border-black pl-2">{item.title}</td>
              <td class="border-2 border-black pl-2">{item.body}</td>
              <td class="border-2 border-black pl-2">{item.date}</td>
              <td class="border-2 border-black pl-2">{item.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;