"use client"
import { useState } from "react"
import YouTubeIframe from "./components/YouTubeIframe"
import { cn } from "@/utils/cn"

type Timestamp = {
  label: string
  time: number
}

type YouTubeVideoProps = {
  videoId: string
  title: string
  startTime?: number
  timestamps?: Timestamp[]
  credit?: string
  glow?: boolean
  className?: string
}

export default function YouTubeVideo({
  videoId,
  title,
  startTime,
  timestamps,
  credit,
  glow,
  className,
}: YouTubeVideoProps) {
  const [seekTime, setSeekTime] = useState<number | null>(null)

  return (
    <div>
      {glow ? (
        <div className="glow">
          <YouTubeIframe
            videoId={videoId}
            title={title}
            startTime={startTime}
            seekTime={seekTime}
          />
        </div>
      ) : (
        <YouTubeIframe
          videoId={videoId}
          title={title}
          startTime={startTime}
          seekTime={seekTime}
        />
      )}

      {credit && (
        <div className="mt-2">
          <small className="text-muted-foreground">
            Credit: <span className="font-semibold">{credit}</span>
          </small>
        </div>
      )}

      {timestamps && (
        <>
          <div className="mt-4 flex justify-center">
            <ul className="list-disc">
              {timestamps.map(({ label, time }) => (
                <li
                  key={time}
                  className="transform cursor-pointer duration-150 ease-in-out hover:scale-[99%]"
                  onClick={() => setSeekTime(time)}
                >
                  <div
                    className={cn(
                      "inline-flex space-x-2 text-base font-light text-blue-400",
                      className,
                    )}
                  >
                    <div className="min-w-8">{formatTime(time)}</div>
                    <span>{label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  const hDisplay = h > 0 ? `${h}:` : ""
  const mDisplay = `${m}:`
  const sDisplay = s.toString().padStart(2, "0")

  return `${hDisplay}${mDisplay}${sDisplay}`
}
