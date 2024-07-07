
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Logo from "../icons/logo";
import Sidebar, { Premium, Streamers } from "../components/sidebar";
import GamingUser, { GameLibrary, GameStart, GameStats, Message, Profits, UserInfo } from "../components/dashboard";

const color = ["bg-gray-700"];

export default function Header(){
    return(
        <div className="h-full p-6">
            <GamingUser/>
            <div className="grid grid-cols-6 mt-6 gap-6 h-[976px]">
                <div className="">
                    <Card className="bg-gray-700 ">
                        <CardHeader>
                            <div className="mx-auto">
                                <Logo/>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Sidebar/>
                            <Streamers/>
                        </CardBody>
                        <CardFooter>
                            <Premium/>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-span-3">
                    <Card className="bg-gray-700 gap-6 h-[976px] ">
                        <CardBody className="space-y-3">
                            
                            <GameStart/>
                            <UserInfo/>
                            <GameLibrary/>
                            <GameStats/>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-span-2 space-y-4 h-full">
                    <Card className="bg-gray-700">
                        <CardBody>
                            <Profits/>
                        </CardBody>
                    </Card>
                    <Card className="bg-gray-700 h-[752px]">
                        <CardBody>
                            <Message/>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}