import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";
import VideoList from "./components/VideoList";
import Container from "./components/ui/Container";
import { videoData } from "./data";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="wd41p-ui-theme">
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
