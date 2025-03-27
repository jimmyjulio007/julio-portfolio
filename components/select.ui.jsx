import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useId } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SelectUI() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Select defaultValue="1">
        <SelectTrigger
          id={id}
          className="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent
          className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 bg-background font-rubik">
          <SelectGroup>
            <SelectLabel className="ps-2 font-rubik uppercase">Choose language</SelectLabel>
            <SelectItem value="1">
            <Avatar>
              <AvatarImage src="/FR.svg" alt="@shadcn" />
              <AvatarFallback className={"font-rubik"}>FR</AvatarFallback>
            </Avatar>
              <span className="truncate font-rubik">French</span>
            </SelectItem>
            <SelectItem value="2">
            <Avatar>
              <AvatarImage src="/GB.svg" alt="@shadcn" />
              <AvatarFallback className={"font-rubik"}>EN</AvatarFallback>
            </Avatar>
              <span className="truncate font-rubik">English</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
