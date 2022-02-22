import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Header, Slideshow, Mint } from "../../components";
import { RootState } from "../../utils/types";
import "../../style.css";

const HomePage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const walletConnected = useSelector<RootState, boolean>(
    (state) => state.user.walletConnected
  );

  useEffect(() => {
    if (walletConnected) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [walletConnected]);

  return (
    <div className="wrapper">
      <div className="inner-wrapper">
        <Header isConnected={isConnected} />
        <div className="main-wrapper">
          <div className="main-flex">
            <Slideshow isConnected={isConnected} />
            <Mint isConnected={isConnected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
