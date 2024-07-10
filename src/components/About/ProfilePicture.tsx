import { motion } from "framer-motion";

interface ProfilePictureProps {
  src: string;
}
export default function ProfilePicture({
  src,
}: ProfilePictureProps): JSX.Element {
  return (
    // Profile picture with motion animation for the border-radius
    <motion.div
      className="h-32 w-32 border border-white"
      initial={{ borderRadius: "50% 0% 50% 0%" }}
      animate={{ borderRadius: "0% 50% 0% 50%" }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        type: "tween",
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
