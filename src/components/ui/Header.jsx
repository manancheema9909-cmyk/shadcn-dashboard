import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Bell, PlusIcon, SearchIcon, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
const Header = () => {
  return (
    <header className="flex">
      <div>
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="sm:flex  items-center hidden sm:block">
          <ButtonGroup className="[--radius:9999rem]">
            <ButtonGroup>
              <Button className="w-7 h-7" variant="outline" size="icon">
                <Bell />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
          <ButtonGroup className="[--radius:9999rem] ">
            <ButtonGroup>
              <Button className="w-7 h-7" variant="outline" size="icon">
                <Gift />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
          <ButtonGroup className="[--radius:9999rem]">
            <ButtonGroup>
              <Button className="w-7 h-7" variant="outline" size="icon">
                <PlusIcon />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
        <Separator orientation="vertical" className="h-6" />

        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="hidden sm:block">
            <h4 className="text-sm">Ali</h4>
            <p className="text-sm">Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
