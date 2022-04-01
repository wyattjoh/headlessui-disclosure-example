import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Button from "../components/Button";
import DisclosureButton from "../components/DisclosureButton";

export default function Home() {
  const [defaultOpen, setDefaultOpen] = useState(false);

  // This idea was taken from https://github.com/tailwindlabs/headlessui/issues/770#issuecomment-917663690
  // which suggests essentially forcing the components to re-render to respect
  // the updated `defaultOpen` prop.
  const [key, setKey] = useState(0);

  const onClick = (open) => {
    setDefaultOpen(open);
    setKey((k) => k + 1);
  };

  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <div className="flex justify-between mb-4">
          <Button onClick={() => onClick(true)}>Expand All</Button>
          <Button onClick={() => onClick(false)}>Collapse All</Button>
        </div>
        <div
          // This `key` prop here when changed will cause React to re-render its
          // children (the disclosures) such that the change to `defaultOpen` is
          // respected.
          key={key}
        >
          <Disclosure defaultOpen={defaultOpen}>
            {({ open }) => (
              <>
                <DisclosureButton open={open}>
                  What is your refund policy?
                </DisclosureButton>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  If you&apos;re unhappy with your purchase for any reason,
                  email us within 90 days and we&apos;ll refund you in full, no
                  questions asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure defaultOpen={defaultOpen} as="div" className="mt-2">
            {({ open }) => (
              <>
                <DisclosureButton open={open}>
                  Do you offer technical support?
                </DisclosureButton>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  No.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
