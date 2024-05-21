"use client"
import { Button } from "@/components/ui/button"
import { LoadingOverlay } from "./LoadingOverlay"

type ButtonWithVideoProps = {
  index: number
  src: string
  title: string
  expandedVideo: number | null
  loadingStates: boolean[]
  handleShow: (index: number) => void
  handleHide: () => void
  handleLoaded: (index: number) => void
}

export function ButtonWithVideo({
  index,
  src,
  title,
  expandedVideo,
  loadingStates,
  handleShow,
  handleHide,
  handleLoaded,
}: ButtonWithVideoProps) {
  return (
    <Button
      variant="ghost"
      onClick={() => handleShow(index)}
      className={`${
        expandedVideo !== index && "relative"
      } float-end mt-4 mr-4 w-48 h-28 rounded-2xl overflow-hidden`}
    >
      {/* Fallback loading state */}
      {loadingStates[index] && expandedVideo !== index && <LoadingOverlay />}
      <div // Video content
        className={`absolute inset-0 transition-opacity duration-300`}
      >
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src={src}
            title={title}
            allow="autoplay; fullscreen"
            onLoad={() => handleLoaded(index)}
            className={`absolute top-0 left-0 w-full h-full
            ${expandedVideo !== index && "pointer-events-none"}
            `}
          />
        </div>
        {expandedVideo === index && (
          <>
            <div className="absolute top-0 right-0 mt-3 mr-3 w-[41px] h-[41px] backdrop-blur-sm cursor-default" />
            <Button
              onClick={(e) => {
                e.stopPropagation() // Prevent parent onClick from firing
                handleHide()
              }}
              className="absolute top-0 right-0 mt-4 mr-4 h-8 w-8 bg-red-500 saturate-[85%] hover:bg-red-700 rounded-sm flex justify-center items-center pb-[10px] text-2xl text-white font-light"
            >
              &times;
            </Button>
          </>
        )}
      </div>
    </Button>
  )
}
