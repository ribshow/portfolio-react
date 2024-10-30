export const MongoDB = () => {
  const videoId = "w8D2SzjiE3w";
  return (
    <div className="video-container p-4 w-full">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="CRUD c# com mongodb"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MongoDB;
