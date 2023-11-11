import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export const useFetch = (videoUrl: string) => {
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    const videoId = extractVideoId(videoUrl);

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items.length > 0) {
          setThumbnailUrl(data.items[0].snippet.thumbnails.medium.url);
        }
      });
  }, [videoUrl]);

  return { thumbnailUrl };
};

//helper function to extract video Id
const extractVideoId = (url: string) => {
  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu.be\/|youtube.com\/embed\/|youtube.com\/v\/|youtube.com\/e\/|watch\?v=|youtu.be\/|youtube.com\/embed\/|youtube.com\/v\/|youtube.com\/e\/)([^?&"'>]+)/
  );
  if (videoIdMatch) {
    return videoIdMatch[1];
  }
  return null;
};
