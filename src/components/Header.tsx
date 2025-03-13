import { Button } from "./Button";
import Navbar from "./Navbar";
import { CezpemLogoText } from "./Logos";
import Container from "./Container";
import Link from "next/link";

import { IoMdStar } from "react-icons/io";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <>
      <MobileMenu />

      <header className="hidden lg:flex bg-white shadow-md relative z-50 h-[78px]">
        <Container className="relative !py-0">
          <div className="mx-auto flex flex-col md:flex-row md:gap-5 justify-between items-center py-3">
            <div className="w-full min-w-48 max-w-48">
              <Link
                href="/"
                className="flex mr-auto ml-0 items-center justify-center"
              >
                <CezpemLogoText className="w-48 mr-auto" />
              </Link>
            </div>

            <Navbar variant="red" className="hidden lg:flex mx-auto" />

            <div className="w-full min-w-48 max-w-48">
              <Link
                target="_blank"
                href="http://apoia.se/cezpem"
                className="hidden lg:flex group w-"
              >
                <Button className="w-full mt-4 md:mt-0">
                  <span className="flex flex-row w-full mx-auto text-center items-center gap-2">
                    <IoMdStar
                      className="group-hover:rotate-[216deg] transition-all duration-300 ease-in-out"
                      size={24}
                    />
                    Apoie o projeto!
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
