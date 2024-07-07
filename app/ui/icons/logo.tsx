import { Image } from "@nextui-org/react";


export default function Logo(){
    return(
        <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold text-sky-500">UGAME</h1>
            <GamepadLogo />
        </div>
    )
}

export function GamepadLogo(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(14,165,233,1)"><path d="M12 2C15.1215 2 17.9089 3.43021 19.7428 5.67108L13.4142 12L19.7428 18.3289C17.9089 20.5698 15.1215 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5Z"></path></svg>
    )
}

export function Lightning(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} fill="rgba(255,255,0,1)"><path d="M13 10H20L11 23V14H4L13 1V10Z"></path></svg>
    )
}