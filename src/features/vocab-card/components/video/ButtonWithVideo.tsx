"use client"
import { Button } from "@/components/ui/button"
import { LoadingOverlay } from "./LoadingOverlay"

type ButtonWithVideoProps = {
  index: number
  src: string
  title: string
  showVideo: number | null
  loadingStates: boolean[]
  handleShow: (index: number) => void
  handleHide: () => void
  handleLoaded: (index: number) => void
}

export function ButtonWithVideo({
  index,
  src,
  title,
  showVideo,
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
        showVideo !== index && "relative"
      } float-end mx-6 mt-6 h-36 w-56`}
    >
      {/* Fallback loading state */}
      {loadingStates[index] && showVideo !== index && <LoadingOverlay />}
      <div // Video content
        className={`absolute inset-0`}
      >
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen"
          onLoad={() => handleLoaded(index)}
          className={`absolute left-0 top-0 h-full w-full ${showVideo !== index && "pointer-events-none"} `}
        />
        {showVideo === index && (
          <>
            <Button
              onClick={(e) => {
                e.stopPropagation() // Prevent parent onClick from firing
                handleHide()
              }}
              className="absolute right-0 top-0 mr-4 mt-4 flex h-8 w-8 items-center justify-center rounded-sm bg-red-500 pb-[10px] text-2xl font-light text-white saturate-[85%] hover:bg-red-700"
            >
              &times;
            </Button>
          </>
        )}
      </div>
    </Button>
  )
}
