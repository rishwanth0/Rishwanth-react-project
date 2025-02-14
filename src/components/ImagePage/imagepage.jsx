
import './../ImagePage/imagepage.css'; 
import carImage from './../ImagePage/carImage.jpg'

const ImagePage = () => {
    return (
        <div className="image-container">
            <img src={carImage  } alt="Description of image" className="image" />
            <div className='white-space'> 
            </div>
        </div>
    );
};

export default ImagePage;