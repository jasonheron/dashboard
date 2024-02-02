'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { MdAccessTime } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import Image from "next/image"
import FloorListedValue from "./FloorListedValue"


export function MiddleCarousel({ response, formattedTime }: any) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="flex flex-col lg:flex-row gap-y-[70px] justify-between overflow-hidden bg-orange px-12 py-11 lg:px-12 lg:py-11 rounded-md">
                        <div className="text-[44px] font-semibold">
                            <p>The</p>
                            <p>Premier</p>
                            <p>Collection</p>
                        </div>
                        <div className='flex gap-2 items-start flex-col justify-end'>
                            <FloorListedValue />
                            <button className="bg-black text-lg lg:text-base px-4 rounded-lg py-1.5 lg:py-1">Buy From Tensor</button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="relative isolate overflow-hidden bg-violet-950 py-8 lg:py-12 rounded-md">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2">
                                <div className="max-w-xl lg:max-w-lg">
                                    <p className="mt-4 font-semibold text-gray-300">
                                         Next Fixture
                                    </p>
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        {response[0]?.teams?.home?.name}
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-300">VS</p>
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        {response[0]?.teams?.away?.name}
                                    </h2>
                                    <div className="flex items-center gap-4 2xl:gap-8 py-2">
                                        <div className="flex items-center gap-1 2xl:gap-2">
                                            <MdAccessTime className="text-base 2xl:text-lg" />
                                            <p className="text-sm 2xl:text-base">{formattedTime}</p>
                                        </div>

                                        <div className="flex items-center gap-1 2xl:gap-2">
                                            <IoLocationOutline className="text-base 2xl:text-lg" />
                                            <p className="text-sm 2xl:text-base">
                                                {response[0]?.fixture?.venue?.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                                    <div className="flex flex-col items-start">
                                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                            <Image
                                                width={30}
                                                height={30}
                                                src={response[0]?.teams?.home?.logo}
                                                alt={response[0]?.teams?.home?.name}
                                                className="w-16 lg:w-20 2xl:w-24 h-16 lg:h-20 2xl:h-24 rounded-sm object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                            <Image
                                                width={30}
                                                height={30}
                                                src={response[0]?.teams?.away?.logo}
                                                alt={response[0]?.teams?.home?.name}
                                                className="w-16 lg:w-20 2xl:w-24 h-16 lg:h-20 2xl:h-24 rounded-sm object-cover"
                                            />
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        
                        <div
                            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                                style={{
                                    clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                }}
                            />
                        </div>
                    </div>
                </CarouselItem>
                

            </CarouselContent>
        </Carousel>
    )
}
