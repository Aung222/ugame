import { Avatar, AvatarGroup, Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";
import { Award, Gamepad2, Heart, LayoutDashboard, Search, Settings, ShoppingBag, Star } from "lucide-react";
import { Lightning } from "../icons/logo";

const tabs = [
    {icon: <LayoutDashboard/>, label: "Dashboard"},
    {icon: <Gamepad2/>, label: "Game"},
    {icon: <ShoppingBag/>, label: "Shop"},
    {icon: <Star/>, label: "Feedback"},
    {icon: <Heart/>, label: "Favorite"},
    {icon: <Award/>, label: "Tournament"},
    {icon: <Settings/>, label: "Setting"},
]

export default function Sidebar() {
  return (
    <div className="text-gray-300 bg-gray-700">
      <Input startContent={<Search/>} placeholder="Search" className="w-full"/>
      <div className="flex flex-col py-5 space-y-5">
        {tabs.map(({icon, label}, index) => (
          <div className="flex gap-2 items-center" key={index}>
            <div className="rounded-lg p-2">{icon}</div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Streamers() {
    return(
        <div className="my-5">
            <p className="text-white pb-5">Top Streamers</p>
            <AvatarGroup className="space-x-2">
              <Avatar radius="full" size="lg" color="primary" />
              <Avatar radius="full" size="lg" color="secondary" />
              <Avatar radius="full" size="lg" color="success" />
            </AvatarGroup>
        </div>
    )
}

export function Premium(){
    return(
        <Card className="rounded-lg bg-slate-800">
            <CardHeader>
                <div className="mx-auto">
                    <Lightning/>
                </div>
            </CardHeader>
            <CardBody>
                <p className="text-white font-bold text-2xl">Enjoy full premium access</p>
            </CardBody>
            <CardFooter className="text-white">
                <Button className="w-full" color="primary">Upgrade</Button>
            </CardFooter>
        </Card>
    )
}