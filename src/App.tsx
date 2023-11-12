import Header from "./components/Header";
import Meta from "./components/Meta";
import { ThemeProvider } from "./components/ThemeProvider";
import VideoList from "./components/VideoList";
import Container from "./components/ui/Container";
import { videoData } from "./data";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="wd41p-ui-theme">
      <Meta
        title="WD41-P | Kodego Bootcamp, Best Batch Ever"
        description="Compilation of video recording of Kodego Bootcamp Batch WD41-P"
        keywords="Kodego, web development, full stack, part-time, video, bootcamp, wd41p, wd41-p"
        author="Jhenbert Villamucho"
      />
      <Header />
      <Container>
        <div className="space-y-10 pb-10 mt-8">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <VideoList items={videoData} />
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
