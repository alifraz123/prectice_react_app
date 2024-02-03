
function Video({title,views,channel}) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{views} views | {channel}</p>
      </div>
    </>
  );
}

export default Video;
