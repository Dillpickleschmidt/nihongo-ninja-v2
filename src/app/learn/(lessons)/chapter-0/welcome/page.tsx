import ContentBox from "@/features/content-box/ContentBox"
import CustomImage from "@/components/CustomImage"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function page() {
  return (
    <ContentBox
      variant="lg"
      color="light"
      nextPageLink="/learn/chapter-0/lesson-1"
    >
      {/* Background Images */}
      <div className="absolute flex w-full flex-row justify-end">
        <div className="absolute mr-[-3px] mt-[17%] h-[0px] w-[290px]">
          <Image
            src="/img/mountain-temple-1.jpg"
            alt="mountain temple"
            width={746}
            height={1945}
            className="pointer-events-none z-[-1] select-none object-contain opacity-90 mix-blend-multiply"
          ></Image>
        </div>
        <div className="absolute mr-[38%] mt-[52%] h-[0px] w-[200px]">
          <Image
            src="/img/mountain-temple-2.jpg"
            alt="mountain rocks"
            width={491}
            height={535}
            className="pointer-events-none absolute z-[-1] select-none object-contain opacity-90 mix-blend-multiply"
          ></Image>
        </div>
        <div className="absolute mr-[-17%] mt-[-14%] h-[0px] w-[725px]">
          <Image
            src="/img/cherry-blossom-branch.jpg"
            alt="cherry blossom branch"
            width={667}
            height={667}
            className="pointer-events-none absolute z-[-1] rotate-[-17deg] select-none object-contain opacity-[.12] mix-blend-darken"
          ></Image>
        </div>
      </div>
      {/* Content */}
      <div className="z-10 flex h-full flex-col justify-center gap-4 lg:flex-row [&>*]:lg:w-[50%]">
        <div className="flex h-full justify-center lg:justify-end">
          <div className="ml-8 mt-12 h-[370px] w-[370px] rounded-[60px] border-[5px] border-[#191919] bg-[#FFF9F1] lg:my-auto lg:h-[470px] lg:w-[470px] xl:h-[670px] xl:w-[670px]"></div>
        </div>
        <div>
          <div className="mx-4 2xl:mx-24">
            <h1 className="mb-6 text-[3.5rem] font-bold leading-[3.5rem] lg:mt-24 xl:mb-0 xl:mt-52">
              Welcome to Chapter 1!
            </h1>
            <p className="mt-4 text-[1.6rem] font-medium leading-8 lg:pr-6">
              Learn the alphabet, numbers, and the most essential everyday
              phrases.
            </p>
            <p className="text-[1.6rem] font-medium leading-8 lg:my-6 xl:my-12">
              In this unit, you&apos;ll learn about:
            </p>
            <ul className="ml-24 text-[1.6rem] font-bold leading-8 [&>*]:lg:py-4">
              <li>Hiragana - Japanese ABCs</li>
              <li>Numbers 1-99</li>
              <li>Greetings</li>
              <li>+ More expressions!</li>
            </ul>
          </div>
          <div className="ml-52 mt-14">
            <Button link="/learn/chapter-0/lesson-1">
              Get started! {"->"}
            </Button>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
