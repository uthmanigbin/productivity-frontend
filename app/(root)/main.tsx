import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


const Main = () => {
    return (
      <div>
        <div className="bg-gray-200 split right lg:w-[95%]">
          <div className="mx-16 w-80 gap-6 grid">
            <Card>
              <CardHeader>
                <Badge variant={"destructive"} className="w-20 h-6 mb-2">
                  Important
                </Badge>
                <CardTitle>Finish Programming</CardTitle>
                <CardDescription>
                  Finsih doing programming homework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Todo:</p>
                <p className="mx-3">Pd-data</p>
                <p className="mx-3">Pd-form</p>
              </CardContent>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant={"outline"}>Details</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Finish Programming</AlertDialogTitle>
                      <AlertDialogDescription>
                        I don't want to fail so please pass me for finishing
                        programming
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-red-600 hover:bg-red-400 text-white hover:text-white">
                        Close
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <Badge variant={"default"} className="w-12 h-6 mb-2">
                    Lost
                  </Badge>
                  <Badge variant={"secondary"} className="w-14 h-6 mb-2 ml-2">
                    Class
                  </Badge>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/assets/school.png"
                    alt="Logo"
                    width={150}
                    height={159}
                    className=" items-center w-full h-32 rounded-xl"
                  />
                </div>
                <CardTitle>Need to graduate</CardTitle>
                <CardDescription>
                  Finsih doing programming homework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Todo:</p>
                <p className="mx-3">Maths</p>
                <p className="mx-3">Programming</p>
                <p className="mx-3">A lot</p>
                <p className="mx-3 line-through text-slate-400">
                  Getting Started
                </p>
              </CardContent>
              <CardFooter>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant={"outline"}>Details</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Need to graduate</AlertDialogTitle>
                      <AlertDialogDescription>
                        I have a lot of work to get done in order to graduate
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-red-600 hover:bg-red-400 text-white hover:text-white">
                        Close
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
}
 
export default Main;