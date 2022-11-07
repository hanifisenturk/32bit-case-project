import { Player, Controls } from "@lottiefiles/react-lottie-player";

function NotFound({ headerHeight }) {
  return (
    <section
      style={{
        height: `calc(100vh - ${headerHeight}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_vzj1xd0x.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </section>
  );
}

export default NotFound;
