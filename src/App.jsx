import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    },
   
  ]
  return data;
}

function App() {
  // Get image data
  const images = imageData();

  return (
    <div className="image-gallery">
      {images.map((img) => (
        <div key={img.id} className="image-container">
          <img src={img.img} alt={`img-${img.id}`} className="image" />
        </div>
      ))}
    </div>
  );
}

export default App;
