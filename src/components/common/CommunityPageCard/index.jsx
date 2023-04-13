import styles from "./styles";

function CommunityPageCard({ children, title, titleIcon, buttonComponent, ...props }) {
  return (
    <div css={styles.cardContainer} {...props}>
      {!(!title && !titleIcon && !buttonComponent) && (
        <div css={styles.cardHeader}>
          <div css={styles.cardHeaderHeading}>
            <h3>{title}</h3>
            <span>{titleIcon}</span>
          </div>
          {buttonComponent}
        </div>
      )}
      {children}
    </div>
  );
}

export default CommunityPageCard;
