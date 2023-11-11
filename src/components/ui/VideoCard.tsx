import { Videos } from "@/types";
import { Card, CardContent, CardFooter } from "./card";
import { useFetch } from "../hooks/use-fetch";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

interface VideoCardProps {
  data: Videos;
}
const VideoCard = ({ data }: VideoCardProps) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <BtnCard data={data} />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{data.title.toUpperCase()}</AlertDialogTitle>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="auto"
                height="auto"
                src={data.link}
                title={data.title}
                style={{ border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              >
                <p>Error | 404</p>
              </iframe>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default VideoCard;

const BtnCard = ({ data }: VideoCardProps) => {
  const { thumbnailUrl } = useFetch(data.link);
  return (
    <Card>
      <CardContent className="pt-4">
        <div className="aspect-w-16 aspect-h-9 relative bg-foreground/5 dark:bg-background rounded-lg">
          <img
            className="w-full h-full object-center object-cover rounded-lg transition-all duration-300 hover:scale-105"
            alt="thumbnail"
            src={thumbnailUrl}
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="font-semibold text-lg">{data.title.toUpperCase()}</p>
        <p className="text-sm text-primary/80">{data.description}</p>
      </CardFooter>
    </Card>
  );
};
