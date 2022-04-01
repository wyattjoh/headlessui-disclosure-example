import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import clsx from "clsx";

export default function DisclosureButton({ open, children }) {
  return (
    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
      <span>{children}</span>
      <ChevronUpIcon
        className={clsx(
          "w-5 h-5 text-purple-500",
          open && "transform rotate-180"
        )}
      />
    </Disclosure.Button>
  );
}
