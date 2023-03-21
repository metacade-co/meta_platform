import { GlobeIcon, NotificationIcon } from "src/assets/icons";
import Image from "next/image";
import MetacadeLogo from "src/assets/Metacade_Logo.png";
import CustomInput from "src/components/common/CustomInput";
import styles from "src/components/Header/styles";
import CustomButton from "src/components/common/CustomButton";

function Header() {
  return (
    <div css={styles.headerContainer}>
      <div css={styles.headerLogoInput}>
        <Image src={MetacadeLogo} alt="metacade_logo" />
        <CustomInput placeholder="Search" />
      </div>
      <div css={styles.headerIconsButtons}>
        <div css={styles.headerIcons}>
          <GlobeIcon />
          <span css={styles.headerDivider} />
          <NotificationIcon />
        </div>
        <div css={styles.headerButtons}>
          <CustomButton bgColor="#B231C4">Play</CustomButton>
          <CustomButton bgColor="#009FE3">Connect Wallet</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
