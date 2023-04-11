import { ArrowIcons } from "src/assets/icons";
import { useRouter } from "next/router";
import styles from "src/styles/arcade/gameDetails.styles";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import CustomButton from "@/components/common/CustomButton";
import { LikeIcon, PlusIcon, ShareIcon } from "@/assets/icons";
import parse from "html-react-parser";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

function GameDetails() {
  const {
    query: { id: gameId },
    back,
  } = useRouter();
  const chartViews = ["24h", "7d", "1m", "1y"];
  const [chartView, setChartView] = useState(chartViews[0]);
  const [gameInfo, setGameInfo] = useState({
    imageURL: "",
    iconURL: "",
    gameScreenshots: [],
    description: "",
    name: "",
    tags: [],
    published: "",
    publisher: "",
  });

  const gameTags = gameInfo.tags?.map((tag, index) => {
    return (
      <Fragment key={tag}>
        <h6>{tag}</h6>
        {gameInfo.tags.length - 1 == index || <span />}
      </Fragment>
    );
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(138, 147, 155, 0.2)",
        },
      },
      y: {
        grid: {
          color: "rgba(138, 147, 155, 0.2)",
        },
        ticks: {
          callback: (v) => `${v}K`,
        },
      },
    },
  };
  function getGradient(ctx, chartArea) {
    let gradient, width, height;
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(0, "rgba(172, 75, 210, 0.08)");
      gradient.addColorStop(1, "#FFFFFF");
    }

    return gradient;
  }
  const labels = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "23:59"];
  const datasetData = labels.map(() => {
    return Math.floor(Math.random() * 10);
  });

  useEffect(() => {
    if (gameId)
      fetch(`http://164.92.203.53:3002/api/game/${gameId}`)
        .then((res) => res.json())
        .then((game) => setGameInfo(game))
        .catch((error) => console.log(error));
  }, [gameId]);

  const data = {
    labels,
    datasets: [
      {
        tension: 0.1,
        fill: true,
        pointStyle: false,
        data: datasetData,
        borderColor: "rgba(0,0,0,0)",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return;
          }
          return getGradient(ctx, chartArea);
        },
      },
    ],
  };

  return (
    <div css={styles.gameDetailsContainer}>
      <div css={styles.gameDetailsHeader}>
        <div css={styles.gameDetailsHeaderLeft}>
          <div css={styles.gameDetailsBackButton} onClick={back}>
            <ArrowIcons />
            <span>Back</span>
          </div>
          <div css={styles.gameDetailsIconBlock}>
            <Image src={gameInfo.iconURL} alt="icon" width="144" height="144" />
            <div css={styles.gameDetailsGameNameBlock}>
              <h3>{gameInfo.name}</h3>
              <div css={styles.gameDetailsTagsBlock}>
                <div css={styles.gameDetailsGameTags}>{...gameTags}</div>
                <div css={styles.gameDetailsGameTagsBordered}>
                  <span>NFT</span>
                  <span>F2P</span>
                </div>
              </div>
              <div css={styles.gameDetailsButtonsBlock}>
                <CustomButton>Exchange</CustomButton>
                <CustomButton>Play</CustomButton>
                <div css={styles.gameDetailsButtonsBlockButtonsSmall}>
                  <ShareIcon />
                  <PlusIcon />
                  <LikeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div css={styles.gameDetailsHeaderRight}>
          <Image src={gameInfo.imageURL} alt="game" width="384" height="216" />
        </div>
      </div>
      <div css={styles.gameDetailsDescription}>
        <h3>Description</h3>
        <div>
          <p>{parse(gameInfo.description)}</p>
          <div></div>
        </div>
      </div>
      <div css={styles.gameDetailsScreenshots}>
        {gameInfo.gameScreenshots.map((screenshotUrl, index) => (
          <img src={screenshotUrl} key={index} />
        ))}
      </div>
      <div css={styles.gameDetailsChartSection}>
        <h3>Metastats</h3>
        <div>
          <div css={styles.gameDetailsChartSectionChartWrapper}>
            <Line height="380" options={options} data={data} />
          </div>
          <div css={styles.gameDetailsChartSectionChartInfoBlock}>
            <div css={styles.gameDetailsChartSectionViews}>
              {chartViews.map((view) => (
                <span
                  css={styles.gameDetailsChartSectionView(view === chartView)}
                  key={view}
                  onClick={(e) => setChartView(e.target.innerText)}
                >
                  {view}
                </span>
              ))}
            </div>
            <div css={styles.gameDetailsChartSectionChartInfo}></div>
          </div>
        </div>
      </div>
      <div css={styles.gameDetailsPublisher}>
        <h3>Publisher</h3>
        <ul>
          <li>{gameInfo.publisher}</li>
          <li>Published {gameInfo.published}</li>
        </ul>
      </div>
    </div>
  );
}

export default GameDetails;
