import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import Image from "next/image";
import CustomButton from "src/components/common/CustomButton";
import { GlobeIcon, NotificationIcon } from "src/assets/icons";
import MetacadeLogo from "src/assets/Metacade_Logo.png";
import CustomInput from "src/components/common/CustomInput";

import { formatEthereumAddress } from "src/utils/string.helpers";

import styles from "src/components/Header/styles";
import { CartIcon, ProfileIcon } from "@/assets/icons";

function Header() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();

  const handleConnectButton = () => {
    isWalletConnected ? null : openConnectModal();
  };

  useEffect(() => {
    setIsWalletConnected(isConnected);
  }, [isConnected]);

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
          <span css={styles.headerDivider} />
          <ProfileIcon />
          <span css={styles.headerDivider} />
          <CartIcon />
        </div>
        <div css={styles.headerButtons}>
          <CustomButton bgColor="#B231C4">Play</CustomButton>
          <CustomButton bgColor="#009FE3" onClick={handleConnectButton}>
            {isWalletConnected ? formatEthereumAddress(address) : "Connect Wallet"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
