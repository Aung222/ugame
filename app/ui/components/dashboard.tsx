"use client"

import { Avatar, AvatarGroup, Button, Card, CardBody, CardHeader, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, } from "@nextui-org/react";
import { BellDot, Mic, Paperclip, Send, Settings } from "lucide-react";
import { Lightning } from "../icons/logo";

// First Column
export default function GamingUser() {
    return (
        <div className="flex justify-between items-center p-2 bg-gray-700 rounded-full">
            <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <p className="text-white font-bold text-2xl">ASUS</p>
            <div className="flex gap-2 items-center">
                <BellDot />
                <Settings />
            </div>
        </div>
    )
}

export function GameStart() {
    return (
        <div className="p-2 bg-slate-800 rounded-lg">
            <img src="https://cdn2.unrealengine.com/fneco-twitter-header-1500x500-15b7e9a0aaad.jpg" className="w-full rounded-md" />
            <div className="flex justify-between mt-2 items-center">
                <p className="text-white font-bold text-2xl">Fortnite</p>
                <p className="text-white text-2xl">Free</p>
                <Button color="primary">Play</Button>
            </div>
        </div>
    )
}

export function UserInfo() {
    const items = [
        { title: "Nickname", value: "Felix" },
        { title: "Win Rate", value: "84%" },
        { title: "Prize Pool", value: "$1820" },
        { title: "Real Name", value: "Simon Mike" },
        { title: "Site Rate", value: "7.8" },
        { title: "Scores", value: "22650" },
        { title: "Origin", value: "Spain" },
        { title: "League", value: "Master" },
    ]
    return (
        <div className="grid grid-cols-3 bg-slate-800 p-2 rounded-lg">
            {items.map((item, index) => (
                <div key={index} className="flex gap-1 items-center py-3">
                    <p className="text-white font-bold text-sm">{item.title} : </p>
                    <p className="text-white font-bold text-sm">{item.value}</p>
                </div>
            ))}
        </div>
    )
}

export function GameLibrary() {
    const images = [
        "https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84",
        "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
        "https://gh.cdn.sewest.net/assets/ident/pulse/a218ace0/FFVIIRINTERGRADE_Available_Now-1vq9ttoa5.jpg?quality=65"
    ]
    return (
        <div className="">
            <p className="text-white font-bold text-2xl mb-4">Continue Playing</p>
            <div className="flex gap-3 items-center overflow-hidden mt-2">
                {images.map((image, index) => (
                    <img key={index} src={image} className="w-64 rounded-md" />
                ))}
            </div>
        </div>
    )
}

export function GameStats() {
    const columns = [
        { name: "User", uid: "user" },
        { name: "Time", uid: "time" },
        { name: "Game", uid: "game" },
        { name: "Profit", uid: "profit" },
    ]

    const data = [
        { id: 1, user: "JackN", time: "10:00", game: "Fortnite", profit: "$500" },
        { id: 2, user: "Maria", time: "4:21", game: "Fortnite", profit: "$690" },
        { id: 3, user: "David", time: "5:00", game: "The Witcher 3", profit: "$342" },
        { id: 4, user: "Jose", time: "6:00", game: "Call of Duty", profit: "$652" },
    ]

    return (
        <div className="bg-slate-800 p-2 rounded-lg">
            <p className="text-white font-bold text-2xl mb-4">My Bets</p>
            <Table isStriped className="bg-slate-800">
                <TableHeader columns={columns}>
                    {columns.map((col) => (
                        <TableColumn key={col.uid}>{col.name}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.user}</TableCell>
                            <TableCell>{item.time}</TableCell>
                            <TableCell>{item.game}</TableCell>
                            <TableCell>{item.profit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

// Second Column
export function Profits() {
    const value = [
        { value: "500", title: "Bets" },
        { value: "1420", title: "Wins" },
        { value: "670", title: "Loses" },
    ];
    return (

        <Card className="text-center bg-gray-700">
            <CardHeader className="mx-auto flex flex-col justify-center items-center">
                <p className="text-white font-bold text-2xl">Total Profit</p>
                <Lightning />
            </CardHeader>
            <CardBody className="grid grid-cols-3 bg-slate-800">
                {value.map((item, index) => (
                    <div key={index} className="flex flex-col text-center items-center py-3">
                        <p className="text-white font-bold text-sm">{item.value}</p>
                        <p className="text-blue-500 font-bold text-sm">{item.title}</p>
                    </div>
                ))}
            </CardBody>
        </Card>

    )
}

export function Message() {
    return (
        <div className="bg-slate-800 p-2 rounded-lg">
            <div className="flex gap-3 items-center">
                <AvatarGroup className="-space-x-2">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042582f4e29026705d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042583f4e29026706d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042584f4e29026707d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042585f4e29026708d" />
                </AvatarGroup>
                <p className="text-white font-bold text-2xl">Online</p>
            </div>
            <div className="flex flex-col space-y-5 mt-10">
                <div className="flex space-x-3 items-center justify-start">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                    <p className="text-white text-sm p-3 bg-slate-500 rounded-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="flex gap-3 items-center justify-end">
                    <p className="text-white text-sm p-3 bg-slate-500 rounded-lg"> Itaque, unde.</p>
                    <Avatar src="https://i.pravatar.cc/150?u=a042582f4e29026705d" />
                </div>
                <div className="flex gap-3 items-center justify-start">
                    <Avatar src="https://i.pravatar.cc/150?u=a042583f4e29026706d" />
                    <p className="text-white text-sm p-3 bg-slate-500 rounded-lg">At.</p>
                </div>
                <div className="flex gap-3 items-center justify-start">
                    <Avatar src="https://i.pravatar.cc/150?u=a042584f4e29026707d" />
                    <p className="text-white text-sm p-3 bg-slate-500 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <div className="flex gap-3 items-center justify-end">
                    <p className="text-white text-sm p-3 bg-slate-500 rounded-lg"> Animi nostrum tempora ipsam odit ullam.</p>
                    <Avatar src="https://i.pravatar.cc/150?u=a042582f4e29026705d" />
                </div>
                <div className="flex gap-3 items-center justify-end">
                    <p className="text-white text-sm p-3 bg-slate-500 rounded-lg"> At.</p>
                    <Avatar src="https://i.pravatar.cc/150?u=a042582f4e29026705d" />
                </div>
                <div className="flex gap-3 items-center justify-start">
                    <Avatar src="https://i.pravatar.cc/150?u=a042584f4e29026707d" />
                    <p className="text-white text-sm p-3 bg-slate-500 rounded-lg">At.</p>
                </div>
                <div className="flex gap-3 items-center justify-start">
                    <Avatar src="https://i.pravatar.cc/150?u=a042583f4e29026706d" />
                    <p className="text-white text-sm p-3 bg-slate-500 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
            </div>
            <div className="flex items-center gap-2 justify-center mt-5">
                <Input size="lg" className="w-full" placeholder="Search" startContent={<Paperclip/>} endContent={<Mic/>}/>
                <Button startContent={<Send/>} className="py-4"></Button>
            </div>
        </div>
    )
}
