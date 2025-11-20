export const CarouselVideo = ({text="AI Carousel Video"}) => {
  return (
    <div style={{
      width:'100%',
      height:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      background:'white',
      fontSize:60
    }}>
      {text}
    </div>
  );
};
