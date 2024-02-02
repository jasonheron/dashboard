import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import { TbBuildingStadium } from "react-icons/tb";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

export interface TSingleMatch {
    match: {
        when: string;
        team1: { teamName: string, teamScore: number, firstHalfScore: number };
        team2: { teamName: string, teamScore: number, firstHalfScore: number };
        time: string;
        venue: string;
        attendance: string;
    }
}

export default function SingleMatch({ match }: any) {
    const date = new Date(match?.fixture?.date);
    // const option = { day: 'numeric', month: 'short' }
    // // Format the date using Intl.DateTimeFormat
    // const formattedDate = new Intl.DateTimeFormat('en-US', option).format(date);

    // Extract hour and minute
    const hour = date.getHours();
    const minute = date.getMinutes();
    // Format the result as HH:mm
    const formattedTime = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);

    // Get day, month, and year components
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });

    // Construct the desired date string
    const formattedDate = `${day} ${month}`;

    const formattedDateforModal = date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='cursor-pointer group text-white/50 w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-4 bg-black hover:bg-white hover:text-black rounded 2xl:rounded-md p-4'>
                    {/* this is match vs div  */}
                    <div className='w-full lg:w-fit flex items-center justify-between lg:justify-normal gap-4 2xl:gap-8'>
                        {/* first team image and name div  */}
                        <div className='flex items-center gap-2 lg:gap-1 2xl:gap-2'>
                            <Image src={match?.teams?.home?.logo} alt={match?.teams?.home?.name} width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                            <p className="text-sm 2xl:text-base">{match?.teams?.home?.name}</p>
                        </div>
                        {/* vs two team div  */}
                        <div className='flex flex-col justify-center items-center'>
                            <span className="w-[1px] h-3 bg-slate-700"></span>
                            <span className="text-sm leading-[16px]">VS</span>
                            <span className="w-[1px] h-3 bg-slate-700"></span>
                        </div>
                        {/* second team image and name div */}
                        <div className='flex items-center gap-2 lg:gap-1 2xl:gap-2'>
                            <Image src={match?.teams?.away?.logo} alt={match?.teams?.away?.name} width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                            <p className="text-sm 2xl:text-base">{match?.teams?.away?.name}</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center lg:justify-normal gap-2 lg:gap-4 2xl:gap-8'>
                        <div className='flex items-center gap-1 2xl:gap-2'>
                            <CiCalendar className="text-base 2xl:text-lg" />
                            <p className="text-sm 2xl:text-base">{formattedDate}</p>
                        </div>

                        <div className='flex items-center gap-1 2xl:gap-2'>
                            <IoLocationOutline className="text-base 2xl:text-lg" />
                            <p className="text-sm 2xl:text-base">{match?.fixture?.venue?.name}</p>
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="max-w-[380px] lg:max-w-screen-md p-2 lg:p-4">
                <DialogHeader>
                    <DialogDescription className="lg:p-2">
                        {/* this is for time and two team  */}
                        <div className=''>
                            <div className='flex flex-col lg:flex-row items-center gap-2 px-1.5 lg:px-4 py-1 border rounded w-fit mx-auto'>
                                <div className='flex items-center gap-2'>
                                    <div className='flex items-center gap-0.5 2xl:gap-2'>
                                        <IoLocationOutline className="text-sm 2xl:text-lg" />
                                        <p className="text-xs 2xl:text-base">{formattedDateforModal}</p>
                                    </div>
                                    <div className='flex items-center gap-0.5 2xl:gap-2'>
                                        <MdAccessTime className="text-sm 2xl:text-lg" />
                                        <p className="text-xs 2xl:text-base">Kick off: {formattedTime}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-0.5 2xl:gap-2'>
                                    <TbBuildingStadium className="text-sm 2xl:text-lg" />
                                    <p className="text-xs 2xl:text-base">{match?.fixture?.venue?.name}</p>
                                </div>
                            </div>

                            <div className='w-full h-8 lg:h-10 flex items-center gap-2 lg:gap-4'>
                                <div className='w-[42%] lg:w-[43%] h-full flex items-center gap-0.5'>
                                    <Image src={match?.teams?.home?.logo} alt={match?.teams?.home?.name} width={45} height={45} className="w-7 lg:w-10 2xl:w-11 h-7 lg:h-10 2xl:h-11 rounded-full" />
                                    <div className="text-sm px-1 lg:px-4 w-full flex items-center justify-start h-full bg-purple-800 font-medium lg:text-lg 2xl:text-xl text-white">{match?.teams?.home?.name}</div>
                                </div>
                                <div className='w-[14%] text-center flex text-black items-center justify-center text-2xl lg:text-4xl font-medium'>
                                    {formattedTime}
                                </div>
                                <div className='w-[42%] lg:w-[43%] flex h-8 lg:h-10 items-center gap-0.5'>
                                    <div className="text-sm px-1 lg:px-4 w-full flex items-center justify-start h-full bg-purple-800 font-medium lg:text-lg 2xl:text-xl text-white">{match?.teams?.away?.name}</div>
                                    <Image src={match?.teams?.away?.logo} alt={match?.teams?.away?.name} width={45} height={45} className="w-8 lg:w-10 2xl:w-11 h-8 lg:h-10 2xl:h-11 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* this is midle div  */}
                        <div className='py-2 lg:py-4'>
                            <div className='py-1 lg:py-2 space-y-1'>
                                <div className='text-center py-2 bg-slate-200 w-full'>
                                    {formattedDateforModal}
                                </div>
                                <div className=' flex items-center justify-between'>
                                    {/* first team image and name div  */}
                                    <div className='flex items-center gap-2 lg:gap-1 2xl:gap-2'>
                                        <Image src={match?.teams?.home?.logo} alt={match?.teams?.home?.name} width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                                        <p className="text-sm 2xl:text-base">{match?.teams?.home?.name}</p>
                                    </div>
                                    {/* vs two team div  */}
                                    <div className='flex items-center'>
                                        {match?.goals?.home || 0} - {match?.goals?.away || 0}
                                    </div>
                                    {/* second team image and name div */}
                                    <div className='flex items-center gap-2 lg:gap-1 2xl:gap-2'>
                                        <Image src={match?.teams?.away?.logo} alt={match?.teams?.away?.name} width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                                        <p className="text-sm 2xl:text-base">{match?.teams?.away?.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* this is footer div  */}
                        <div className='w-full flex items-center px-4 lg:px-12 gap-3 lg:gap-6'>
                            <div className='text-center w-full'>
                                <p>WIN</p>
                                <div className='bg-purple-800 text-lg rounded-md px-4 py-1 lg:py-2 text-white font-medium'>
                                    2:2
                                </div>
                            </div>
                            <div className='text-center w-full'>
                                <p>DRAW</p>
                                <div className='bg-purple-800 text-lg  rounded-md px-4 py-1 lg:py-2 text-white font-medium'>
                                    2:2
                                </div>
                            </div>
                            <div className='text-center w-full'>
                                <p>WIN</p>
                                <div className='bg-purple-800 text-lg  rounded-md  px-4 py-1 lg:py-2 text-white font-medium'>
                                    2:2
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}