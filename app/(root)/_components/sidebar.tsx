import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuUser } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlinePicture } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="pt-[20px] left flex flex-col lg:w-[5%] split">
      <div className="justify-center flex items-center cursor-pointer">
        <div>
          <Dialog>
            <DialogTrigger>
              <Avatar className="mt-5 lg:w-12 lg:h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <Avatar className="lg:w-12 lg:h-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <DialogDescription>
                  <p>
                    <span className="font-semibold text-black">Name:</span>{" "}
                    Deivids Saulītis
                  </p>
                  <p className="color-slate-400">
                    <span className="font-semibold text-black">Username:</span>{" "}
                    @Deviss
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <div className="w-[70%] border-b border-gray-400"></div>
      </div>
      <div className="flex justify-center cursor-pointer mb-9">
        <LuUser className="w-9 h-9" />
      </div>
      <div className="flex justify-center cursor-pointer mb-9">
        <IoCloudUploadOutline className="w-9 h-9 text-slate-300" />
      </div>
      <div className="flex justify-center cursor-pointer mb-9">
        <AiOutlinePicture className="w-9 h-9 text-slate-300" />
      </div>
      <div className="flex justify-center cursor-pointer mb-9">
        <FaCalendarDays className="w-9 h-9 text-slate-300" />
      </div>
      <div className="flex justify-center items-center cursor-pointer absolute m-auto left-0 right-0 bottom-3">
        <Sheet>
          <SheetTrigger>
            <MdOutlineSettings className="w-9 h-9 text-slate-300" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>
                Welcome to the settings menu I have no idea what to put here so
                I'll be creative
              </SheetDescription>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Deivids Saulītis"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" value="@Deviss" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Sidebar;
