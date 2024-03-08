import { useSelector } from "react-redux";
import VideoBackgroud from "./VideoBackgroud";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackgroud movieId={id} />
    </div>
  );
};
export default MainContainer;
