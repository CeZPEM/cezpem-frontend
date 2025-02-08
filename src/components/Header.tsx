import { Button } from "./Button";
import { IconStar } from "./Icons";
import Navbar from "./Navbar";
import { CezpemLogoText } from "./Logos";
import Container from "./Container";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <Container className="!py-0">
        <div className="mx-auto flex flex-col md:flex-row gap-5 justify-between items-center py-3">
          <div className="flex items-center justify-center rounded">
            <CezpemLogoText />
          </div>

          <Navbar />

          <Button className="flex items-center gap-2 mt-4 md:mt-0">
            <IconStar />
            Seja um professor!
          </Button>
        </div>
      </Container>
    </header>
  );
}
