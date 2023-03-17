import Image from "next/image";
import styles from "src/components/common/SwiperFeatureCard/styles.js";

function SwiperFeatureCard({ image, alt, text }) {
  return (
    <div css={styles.cardContainer}>
      <Image src={image} alt={alt} />
      <p>{text}</p>
    </div>
  );
}

export default SwiperFeatureCard;
