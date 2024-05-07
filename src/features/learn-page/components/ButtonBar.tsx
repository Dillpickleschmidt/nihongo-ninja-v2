export default function ButtonBar() {
  return (
    <div className="z-10 flex justify-center h-10 bg-[#2d2d2d]/80 backdrop-blur-xl">
      <ul className="text-base w-full h-full max-w-[95%] lg:max-w-[86%] xl:max-w-[82%] 2xl:max-w-[80%] flex justify-around items-center opacity-30">
        <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>CARDS</p>
        <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>
          RESOURCES
        </p>
        <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>PROGRESS</p>
        <p style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}>TOOLS</p>
      </ul>
    </div>
  )
}
