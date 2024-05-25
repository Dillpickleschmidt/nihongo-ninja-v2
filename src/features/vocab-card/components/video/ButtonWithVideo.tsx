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
      } float-end mt-6 mx-6 w-56 h-36`}
    >
      {/* Fallback loading state */}
      {loadingStates[index] && showVideo !== index && (
        <div className="absolute inset-0 bg-white"></div>
      )}
      <div // Video content
        className={`absolute inset-0 transition-opacity duration-300`}
      >
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen"
          onLoad={() => handleLoaded(index)}
          className={`absolute top-0 left-0 w-full h-full
            ${showVideo !== index && "pointer-events-none"}
            `}
        />
        {showVideo === index && (
          <>
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
