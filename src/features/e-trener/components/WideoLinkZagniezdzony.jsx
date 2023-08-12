//
// Table of content for this file is written at the bottom
//
import styles from "src/styles/sass/styles-all.module.scss";
import YouTube from "react-youtube";

const WideoLinkZagniezdzony = ({ linkDoWideo }) => {
  const handleReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "180",
    width: "300",
    // playsinline: 1, //hook1 - tak sie robi fullscreen? czy gdzie indziej ten property dac, np.w playerVars?
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className={styles["container__css-class-name"]}>
      <YouTube
        className={styles[""]}
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={handleReady}
      />
    </div>
  );
};
export default WideoLinkZagniezdzony;

//~~ _. WideoLinkZagniezdzony
//
