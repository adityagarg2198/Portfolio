import './ImageCard.css';

const ImageCard = () => {
  return (
    <div className='image-card-container'>
      <div  className='profile-image' />
      <h1 className='name'>Aditya Garg</h1>
      <p className='description'>Software Developer</p>
      <button className='hire-me'>Hire Me</button>
    </div>
  );
};

export default ImageCard;
