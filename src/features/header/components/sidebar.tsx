import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import { DataLinks, DataProducts } from "../constants";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer active:text-blue-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="p-2">Page Routes</SheetTitle>

          {DataLinks.map((item) => (
            <SheetDescription
              key={item.name}
              className="flex gap-y-5 text-[18px] flex-col hover:text-blue-500 transition hover:bg-gray-200 p-2"
            >
              <Link to={item.link}>{item.name}</Link>
            </SheetDescription>
          ))}
        </SheetHeader>
        <SheetHeader>
          <SheetTitle className="p-2">Categories</SheetTitle>

          {DataProducts.map((item) => (
            <SheetDescription
              key={item.name}
              className="flex gap-y-5 text-[18px] flex-col hover:text-blue-500 transition  hover:bg-gray-200 p-2"
            >
              <Link to={item.link}>{item.name}</Link>
            </SheetDescription>
          ))}
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
