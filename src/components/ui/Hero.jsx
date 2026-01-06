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
} from "lucide-react";

import { Button } from "@/components/ui/button";
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
        <Card className="col-span-3 sm:col-span-1 p-4   ">
          <CardContent className=" grid grid-cols-2 gap-4">
            <div className="flex gap-1 items-center ">
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
          <Card className="col-span-3 sm:col-span-1 p-4  ">
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
          <Card className="col-span-3 sm:col-span-1 p-4  ">
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
                  <span className="text-xs">
                    +<span className="font-bold text-stone-600">$</span>143.50
                    <span className="ml-2 ">Increased </span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3 sm:col-span-1 text-center">
          <Card className="col-span-3 sm:col-span-1 p-4  ">
            <CardContent className=" grid grid-cols-2 gap-4">
              <div className="flex gap-1 items-center ">
                <ChartNoAxesColumn
                  className="bg-stone-200 py-1 rounded-sm "
                  size={20}
                />
                <span className="font-bold">Total Subscriber</span>
              </div>
              <div className="place-self-end">
                <input
                  type="week"
                  defaultValue="2026-W01"
                  className=" w-20 h-8 border border-stone-400 rounded px-1 py-1 text-stone-800 font-small "
                />
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
                  <span className="text-xs">
                    +749
                    <span className="ml-2 ">Increased</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-3 sm:col-span-1 bg-stone-200 p-4 bg-gray-100 text-center">
          Item 6
        </div>
        <div className="bg-stone-200 col-span-3 sm:col-span-2 p-4 bg-gray-100 text-center">
          Item 7
        </div>
      </div>
    </div>
  );
};

export default Hero;
