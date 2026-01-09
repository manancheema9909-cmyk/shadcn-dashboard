import { useState } from "react";
import { format } from "date-fns";
import {
  CalendarIcon,
  Filter,
  Download,
  ChevronDown,
  Eye,
  BadgeCheckIcon,
  MoveUpRight,
  MoveDownRight,
  CircleAlert,
  Database,
  TrendingUp,
  ChartNoAxesColumn,
  GitCompare,
  Users,
  SwatchBook,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

import { Badge } from "@/components/ui/badge";
const Hero = () => {
  const [date, setDate] = useState({
    from: new Date(2025, 9, 18),
    to: new Date(2025, 10, 18),
  });

  return (
    <div>
      <div className=" mt-4 border border-gray-200 flex flex-col sm:flex-row sm:items-center">
        <h1 className="self-start sm:self-center">Dashboard</h1>
        <div className="flex items-center gap-2 py-4  ml-auto  ">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2 ">
                <CalendarIcon className="h-4 w-4" />
                {date.from && date.to
                  ? `${format(date.from, "MMM dd")} – ${format(
                      date.to,
                      "MMM dd"
                    )}`
                  : "Pick date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>

          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1fr_1fr] gap-4">
        <Card className="col-span-3 sm:col-span-1 py-4">
          <CardContent className=" grid grid-cols-2 gap-4 ">
            <div className="flex gap-1 items-center  ">
              <Eye className="bg-stone-200 py-1 rounded-sm " size={20} />
              <span className="font-bold">Page Views</span>
            </div>
            <div className="place-self-end">
              <CircleAlert size={15} />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-3xl ">12,450</span>
              <Badge
                variant="secondary"
                className="bg-green-100 text-xs py-[2px] px-1"
              >
                <span className="text-green-700">15.8%</span>
                <MoveUpRight size={15} className="text-green-700" />
              </Badge>
            </div>
          </CardContent>
        </Card>
        <div className="col-span-3 sm:col-span-1  text-center ">
          <Card className="col-span-3 sm:col-span-1 p-4  ">
            <CardContent className=" grid grid-cols-2 gap-4">
              <div className="flex gap-1 items-center ">
                <Database className="bg-stone-200 py-1 rounded-sm" size={20} />
                <span className="font-bold">Total Revenu</span>
              </div>
              <div className="place-self-end">
                <CircleAlert size={15} />
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-3xl">
                  <span className="font-bold text-stone-600 ">$</span>363.95
                </span>

                <Badge
                  variant="secondary"
                  className="bg-red-300 text-xs py-[2px] px-1"
                >
                  <span className="text-red-700">34.0%</span>
                  <MoveDownRight size={15} className="text-red-700" />
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3 sm:col-span-1  text-center">
          <Card className="col-span-3 sm:col-span-1 py-4  ">
            <CardContent className=" grid grid-cols-2 gap-4">
              <div className="flex gap-1 items-center ">
                <TrendingUp
                  className="bg-stone-200 py-1 rounded-sm "
                  size={20}
                />
                <span className="font-bold">Bounce Rate</span>
              </div>
              <div className="place-self-end">
                <CircleAlert size={15} />
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-3xl ">86.5%</span>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-xs py-[2px] px-1"
                >
                  <span className="text-green-700">24.2%</span>
                  <MoveUpRight size={15} className="text-green-700" />
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3 sm:col-span-2  text-center">
          <Card className="col-span-3 sm:col-span-1 py-4  ">
            <CardContent className=" grid grid-cols-2 gap-4">
              <div className="flex gap-1 items-center ">
                <ChartNoAxesColumn
                  className="bg-stone-200 py-1 rounded-sm "
                  size={20}
                />
                <span className="font-bold">Sales Overview</span>
              </div>
              <div className="place-self-end"></div>
              <div className="grid place-items-start gap-2 ">
                <span className=" text-3xl">
                  <span className="font-bold text-stone-600 ">$</span>9,257.51
                </span>
                <div className="flex gap-2 items-center">
                  <Badge
                    variant="secondary"
                    className="  bg-green-100 text-xs py-[2px] px-1"
                  >
                    <span className="text-green-700">15.8%</span>
                    <MoveUpRight size={15} className="text-green-700" />
                  </Badge>
                  <span className="text-xs text-stone-500 ">
                    +<span className="font-bold text-stone-500">$</span>143.50
                    <span className="ml-2 text-stone-500 ">Increased </span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3 sm:col-span-1 text-center   ">
          <Card className="col-span-3 sm:col-span-1 py-4  ">
            <CardContent className=" grid grid-cols-2 gap-4   ">
              <div className="flex items-center gap-1  ">
                <Users
                  className="shrink-0 bg-stone-200 py-1 rounded-sm"
                  size={20}
                />
                <span className="font-bold whitespace-nowrap">
                  Total Subscriber
                </span>
              </div>

              <div className="place-self-end">
                <select class="border rounded-md py-0.5 px-4 text-sm w-22">
                  <option value="">Weekly</option>
                </select>
              </div>
              <div className="grid place-items-start gap-2 ">
                <span className=" text-3xl">24,473</span>
                <div className="flex gap-2 items-center">
                  <Badge
                    variant="secondary"
                    className="  bg-green-100 text-xs py-[2px] px-1"
                  >
                    <span className="text-green-700">8.3%</span>
                    <MoveUpRight size={15} className="text-green-700" />
                  </Badge>
                  <span className="text-xs text-stone-600 ">
                    +749
                    <span className="ml-2 text-stone-500 ">Increased</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-3 sm:col-span-1 text-center   ">
          <Card className="col-span-3 sm:col-span-1 py-4  ">
            <CardContent className=" grid grid-cols-2 gap-4   ">
              <div className="flex items-center gap-1  ">
                <SwatchBook
                  className="shrink-0 bg-stone-200 py-1 rounded-sm"
                  size={20}
                />
                <span className="font-bold whitespace-nowrap">
                  Sales Distribution
                </span>
              </div>

              <div className="place-self-end">
                <select class="border rounded-md py-0.5 px-4 text-sm w-22">
                  <option value="">Monthly</option>
                </select>
              </div>
              <div className=" my-4 flex gap-2">
                <div className="  ">
                  <div className=" flex items-center gap-2 ">
                    <Separator
                      orientation="vertical"
                      className="h-3 bg-blue-700"
                    />
                    <p className="text-[10px]">WebSite</p>
                  </div>
                  <div className="">
                    <span className="flex gap-1 ml-3 font-bold text-xl">
                      $ <span className="text-xl">374.82</span>
                    </span>
                  </div>
                </div>
                <div className=" ">
                  <div className=" flex items-center gap-2  ">
                    <Separator
                      orientation="vertical"
                      className="h-3 bg-blue-700"
                    />
                    <p className="text-[10px] whitespace-nowrap">
                      Mobile Application
                    </p>
                  </div>
                  <div className="">
                    <span className="flex gap-1 ml-3 font-bold text-xl">
                      $ <span className="text-xl">241.60</span>
                    </span>
                  </div>
                </div>
                <div className="    ">
                  <div className=" flex items-center gap-2 ">
                    <Separator
                      orientation="vertical"
                      className="h-3 bg-blue-700"
                    />
                    <p className="text-[10px]">other</p>
                  </div>
                  <div className="">
                    <span className="flex gap-1 ml-3 font-bold text-xl">
                      $ <span className="text-xl">213.42</span>
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className=" col-span-3 sm:col-span-2 text-center">
          <Card className="">
            <CardContent className=" ">
              <div className="  flex items-center gap-2 p-4">
                <GitCompare
                  className="bg-stone-200 py-1 rounded-sm "
                  size={20}
                />

                <span className="font-bold">List Of Integration</span>
                <a href="#" className="text-sm text-blue-500 ml-auto">
                  See all
                </a>
              </div>
              <div className="">
                <Table className="">
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <input type="checkbox" />

                          <span>Application</span>
                        </div>
                      </TableCell>

                      <TableCell className="text-center">Type</TableCell>
                      <TableCell className="text-center ">Rate</TableCell>
                      <TableCell className="text-right">Profit</TableCell>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <input type="checkbox" />
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              className="object-cover"
                              src="https://github.com/shadcn.png"
                            />
                            <AvatarFallback>FB</AvatarFallback>
                          </Avatar>
                          <span>Facebook</span>
                        </div>
                      </TableCell>

                      <TableCell className="text-center">
                        Social Media
                      </TableCell>
                      <TableCell className="text-center justify-center  flex items-center gap-2">
                        <Progress
                          value={68}
                          className="w-16 h-2 rounded-full [&>div]:bg-blue-600"
                        />
                        <span>68%</span>
                      </TableCell>
                      <TableCell className="text-right">$1200</TableCell>
                    </TableRow>

                    <TableRow className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <input type="checkbox" />
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              className="object-cover"
                              src="https://github.com/shadcn.png"
                            />
                            <AvatarFallback>CC</AvatarFallback>
                          </Avatar>
                          <span>Candy Crush</span>
                        </div>
                      </TableCell>

                      <TableCell className="text-center">Game</TableCell>
                      <TableCell className="text-center justify-center  flex items-center gap-2">
                        <Progress
                          value={42}
                          className="w-16 h-2  rounded-full [&>div]:bg-blue-600"
                        />
                        <span>42%</span>
                      </TableCell>
                      <TableCell className="text-right">$800</TableCell>
                    </TableRow>

                    <TableRow className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <input type="checkbox" />
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              className="object-cover"
                              src="https://github.com/shadcn.png"
                            />
                            <AvatarFallback>IG</AvatarFallback>
                          </Avatar>
                          <span>Instagram</span>
                        </div>
                      </TableCell>

                      <TableCell className="text-center">
                        Social Media
                      </TableCell>
                      <TableCell className="text-center justify-center flex items-center gap-2">
                        <Progress
                          value={78}
                          className="w-16 h-2  rounded-full [&>div]:bg-blue-600"
                        />
                        <span>78%</span>
                      </TableCell>
                      <TableCell className="text-right">$1500</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
