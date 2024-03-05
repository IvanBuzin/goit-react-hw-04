import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ gallery, onOpen }) => {
  return (
    <ul className={css.gallery}>
      {gallery.map((item) =>
        ImageCard(
          <li key={item.id} className={css.galletyItem}>
            <ImageCard imageCard={item} onOpen={onOpen} />
          </li>
        )
      )}
    </ul>
  );
};
