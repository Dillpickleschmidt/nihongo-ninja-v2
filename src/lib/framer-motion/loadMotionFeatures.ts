// Make sure to return the specific export containing the feature bundle.
export default async function loadMotionFeatures(): Promise<any> {
  const res = await import("@/lib/framer-motion/features")
  return res.default
}
