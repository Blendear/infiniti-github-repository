// Table of content for this file is written at the bottom
import styles from "src/styles/sass/styles-all.module.scss";
import YouTube from "react-youtube";

const WideoLinkZagniezdzony = ({ linkDoWideo, setNazwaModalu }) => {
  const handleReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      playsinline: 0,
    },
  };

  return (
    <article className={styles["modal-cwiczenia-wybranego__wideo"]}>
      <button
        onClick={() => {
          setNazwaModalu("null");
        }}
      >
        <h1>X</h1>
      </button>
      <YouTube
        className={styles["modal-cwiczenia-wybranego__wideo__iframe"]}
        videoId={linkDoWideo}
        opts={opts}
        onReady={handleReady}
      />
    </article>
  );
};
export default WideoLinkZagniezdzony;

//~~ _. WideoLinkZagniezdzony
//
