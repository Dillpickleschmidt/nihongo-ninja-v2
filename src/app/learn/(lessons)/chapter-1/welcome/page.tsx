import ContentBox from "@/components/ContentBox"
import CustomImage from "@/components/CustomImage"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function page() {
  return (
    <ContentBox
      variant="large"
      color="light"
      nextPageLink="/learn/chapter-1/lesson-1"
    >
      {/* Background Images */}
      <div className="absolute flex flex-row justify-end w-full">
        <div className="absolute h-[0px] w-[290px] mt-[17%] mr-[-3px]">
          <Image
            src="/img/mountain-temple-1.jpg"
            alt="mountain temple"
            width={746}
            height={1945}
            className="object-contain mix-blend-multiply opacity-90 z-[-1] select-none pointer-events-none"
          ></Image>
        </div>
        <div className="absolute h-[0px] w-[200px] mr-[38%] mt-[52%]">
          <Image
            src="/img/mountain-temple-2.jpg"
            alt="mountain rocks"
            width={491}
            height={535}
            className="absolute object-contain mix-blend-multiply opacity-90 z-[-1] select-none pointer-events-none"
          ></Image>
        </div>
        <div className="absolute h-[0px] w-[725px] mt-[-14%] mr-[-17%]">
          <Image
            src="/img/cherry-blossom-branch.jpg"
            alt="cherry blossom branch"
            width={667}
            height={667}
            className="absolute object-contain mix-blend-darken opacity-[.12] rotate-[-17deg] z-[-1] select-none pointer-events-none"
          ></Image>
        </div>
      </div>
      {/* Content */}
      <div
        className="flex lg:flex-row flex-col justify-center h-full gap-4 z-10
          [&>*]:lg:w-[50%]"
      >
        <div className="flex justify-center h-full lg:justify-end">
          <div className="bg-[#FFF9F1] xl:h-[670px] xl:w-[670px] lg:h-[470px] lg:w-[470px] h-[370px] w-[370px] mt-12 lg:my-auto ml-8 rounded-[60px] border-[5px] border-[#191919]"></div>
        </div>
        <div>
          <div className="mx-4 2xl:mx-24">
            <h1 className="xl:mt-52 xl:mb-0 mb-6 lg:mt-24 text-[3.5rem] font-bold leading-[3.5rem]">
              Welcome to Chapter 1!
            </h1>
            <p className="mt-4 lg:pr-6 text-[1.6rem] leading-8 font-medium">
              Learn the alphabet, numbers, and the most essential everyday
              phrases.
            </p>
            <p className="xl:my-12 lg:my-6 text-[1.6rem] leading-8 font-medium">
              In this unit, you&apos;ll learn about:
            </p>
            <ul
              className="ml-24 text-[1.6rem] leading-8 font-bold
                [&>*]:lg:py-4"
            >
              <li>Hiragana - Japanese ABCs</li>
              <li>Numbers 1-99</li>
              <li>Greetings</li>
              <li>+ More expressions!</li>
            </ul>
          </div>
          <div className="ml-52 mt-14">
            <Button link="/learn/chapter-1/lesson-1">
              Get started! {"->"}
            </Button>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
