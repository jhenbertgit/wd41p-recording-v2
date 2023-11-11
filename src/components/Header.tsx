import { ModeToggle } from "./ModeToggle";
import Container from "./ui/Container";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full mt-6">
          <div className="flex items-center">
            <a href="/">
              <h1 className="text-xl font-bold">Kodego Batch WD41-P</h1>
            </a>
          </div>
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
