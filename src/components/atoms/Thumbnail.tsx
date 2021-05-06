import { Image } from 'rebass';

export interface ThumbnailProps {
  imageUrl: string;
}

const Thumbnail = ({ imageUrl }: ThumbnailProps) => (
  <Image variant="thumbnail" src={imageUrl} alt="avatar" width={90} height={90} />
);

export default Thumbnail;
