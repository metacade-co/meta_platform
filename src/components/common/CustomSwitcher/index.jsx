import styles from "./styles";

function CustomSwitcher({ firstButtonText, secondButtonText, isFirstButtonActive, handleSwitch }) {
  return (
    <div css={styles.switcherContainer(isFirstButtonActive)}>
      <button onClick={() => handleSwitch((prev) => !prev)}>{firstButtonText}</button>
      <button onClick={() => handleSwitch((prev) => !prev)}>{secondButtonText}</button>
    </div>
  );
}

export default CustomSwitcher;
