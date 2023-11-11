import { Videos } from "@/types";
import VideoCard from "./ui/VideoCard";

interface VideoListProps {
  items: Videos[];
}

const VideoList = ({ items }: VideoListProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <VideoCard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
