import { useState } from "react";

const PostForm = ({data, setData}) => {

  const [formData, setFormData] = useState({ //formos inputu laukai
    title: "",
    author: "",
    description: "",
    pages: "",
    image: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    console.log(e)
    e.preventDefault();
    fetch("http://localhost:5000/knygos", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    setData([...data, formData]); //visas esamas korteles update su naujai ivestais duomenimis su formos submit
    setFormData({title: "", author: "", description: "", pages: "", image: ""}) // po submit isvalomi formos input laukai
  }
  return (

    <form className="addForm" onSubmit={handleSubmit}>
      <div>
      <label>Knygos pavadinimas</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      </div>

      <div>
      <label>Autorius</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
      />
      </div>

      <div>
        <label>Aprašymas:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      
      <div>
      <label>Puslapių skaičius</label>
        <input
          type="number"
          name="pages"
          value={formData.pages}
          onChange={handleChange}
        />
        </div>
      
      <div>
      <label>Knygos nuotrauka</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
      
    </form>

  );
};

export default PostForm;