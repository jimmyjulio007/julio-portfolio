"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useId } from "react";

export default function SelectUI() {
  const id = useId();
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale) => {
    const segments = pathname.split('/');
    segments[1] = locale; // Replace the locale segment
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="*:not-first:mt-2">
      <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
        <SelectTrigger
          id={id}
          className="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
        >
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="bg-background font-rubik">
          <SelectGroup>
            <SelectLabel className="ps-2 font-rubik uppercase">
              Choose language
            </SelectLabel>
            <SelectItem value="fr">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/FR.svg" alt="FR" />
                  <AvatarFallback className="font-rubik">FR</AvatarFallback>
                </Avatar>
                Français
              </div>
            </SelectItem>
            <SelectItem value="en">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/GB.svg" alt="EN" />
                  <AvatarFallback className="font-rubik">EN</AvatarFallback>
                </Avatar>
                English
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
