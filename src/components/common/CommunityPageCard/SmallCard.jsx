import CommunityPageCard from ".";
import parse from "html-react-parser";
import styles from "./styles";

function SmallCard({ title, titleIcon, subtitle, children, textOnly, buttonComponent, ...props }) {
  const subtitleText = subtitle?.map((word) => {
    return <span key={word}>{subtitle.length > 1 ? `${word}. ` : word}</span>;
  });

  return (
    <CommunityPageCard
      css={styles.smallCard}
      title={title}
      titleIcon={titleIcon}
      buttonComponent={buttonComponent}
      {...props}
    >
      {subtitleText && <h4>{subtitleText}</h4>}
      {textOnly ? <p>{parse(children)}</p> : children}
    </CommunityPageCard>
  );
}

export default SmallCard;
