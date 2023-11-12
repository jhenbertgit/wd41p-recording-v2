import Header from "./components/Header";
import Meta from "./components/Meta";
import { ThemeProvider } from "./components/ThemeProvider";
import VideoList from "./components/VideoList";
import Container from "./components/ui/Container";
import { videoData } from "./data";

const meta = Meta({
  title: "Kodego | WD41-P",
  author: "Jhenbert Villamucho",
  keywords: "Kodego, part-time, video recording, bootcamp",
  description: "Compilation of video recording of Kodego Batch WD41-P",
});

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="wd41p-ui-theme">
      {meta}
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
