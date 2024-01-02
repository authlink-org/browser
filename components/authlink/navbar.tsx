import { Button } from "../ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="border-b-2">
      <div className="container mx-auto px-4 m-3">
        <div className="flex justify-between">
          <div className="flex justify-between mt-1 mr-3">
            <h2 className="scroll-m-20 mt-1.5 mr-4 text-md font-semibold">
              <a href="https://publisher.authlink.org/setup">
                <div className="flex justify-center">
                  <ArrowLeftIcon className="mt-1" />
                  <b className="ml-2">Publisher</b>
                </div>
              </a>
            </h2>
          </div>
          <div className="flex flex-row mt-1">
            <Button asChild>
              <a href="https://publisher.authlink.org/setup">Monetize</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
