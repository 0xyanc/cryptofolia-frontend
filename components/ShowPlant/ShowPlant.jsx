import { Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import IERC20 from "../../abis/IERC20.json";
import { BigNumber, ethers } from "ethers";

const ShowPlant = () => {
  let provider = useProvider();
  let { data: signer } = useSigner();
  const { address, isConnected } = useAccount();
  const [allowance, setAllowance] = useState(0);
  const [balance, _setBalance] = useState(BigNumber.from("0"));
  const balanceRef = useRef(balance);
  const setBalance = (data) => {
    balanceRef.current = data;
    _setBalance(data);
  };
  const solarToken = process.env.NEXT_PUBLIC_SOLAR_ERC20;
  const inputToken = process.env.NEXT_PUBLIC_USDC_ERC20;
  const chainId = 421613;
  const uniswapLink = "https://app.uniswap.org/#/swap?inputCurrency=" + inputToken + "&outputCurrency=" + solarToken + "&chain=" + chainId;
  const readSolarERC20Contract = useContract({
    address: solarToken,
    abi: IERC20,
    signerOrProvider: provider,
  });
  const writeSolarERC20Contract = useContract({
    address: solarToken,
    abi: IERC20,
    signerOrProvider: signer,
  });
  useEffect(() => {
    if (isConnected) {
      getBalance();
      getAllowance();
      subscribeToEvents();
    }
    return () => {
      // remove all the listeners
      readSolarERC20Contract.off("Transfer", transferListener);
    };
  }, [address, isConnected]);

  const subscribeToEvents = async () => {
    const startBlockNumber = await provider.getBlockNumber();
    // Listening to Staked events on Single Pool
    readSolarERC20Contract.on("Transfer", (from, to, value, event) => transferListener(from, to, value, event, startBlockNumber));
  };

  const transferListener = (from, to, value, event, startBlockNumber) => {
    if (event.blockNumber <= startBlockNumber) return;
    console.log(from, to);
    console.log(value);
    if (from === address || to === address) {
      getBalance();
    }
  };

  const getBalance = async () => {
    const userBalance = await readSolarERC20Contract.balanceOf(address);
    setBalance(userBalance);
  };

  const mint = async () => {
    const bal = Math.min(7, Math.floor(Number(ethers.utils.formatEther(balanceRef.current.toString())) / 1000));
    const uri = `https://cryptofolia.vercel.app/images/${bal}.png`;
    const mintNFT = await writeSolarERC20Contract.getNFT(balanceRef.current, uri);
    await mintNFT.wait();
  };

  const getAllowance = async () => {
    const allowance = await readSolarERC20Contract.allowance(address, solarToken);
    setAllowance(allowance.toString());
  };

  const approve = async () => {
    const tx = await writeSolarERC20Contract.approve(solarToken, ethers.constants.MaxUint256);
    await tx.wait();
    setAllowance(ethers.constants.MaxUint256);
  };

  const displayPlant = () => {
    const bal = Math.min(7, Math.floor(Number(ethers.utils.formatEther(balanceRef.current.toString())) / 1000));
    let source = `/images/${bal}.png`;
    console.log(bal);
    return <Image boxSize="400px" objectFit="cover" src={source} alt="Cactus" />;
  };

  return (
    <Flex direction="column" alignItems="center" w="100%">
      <Text color="white" as="b">
        {ethers.utils.formatEther(balance.toString())} Total KWH
      </Text>
      {displayPlant()}
      <Flex mt="1rem">
        <Link href={uniswapLink} isExternal>
          <Button colorScheme="green">Trade</Button>
        </Link>
        {allowance === 0 ? (
          <Button ml="1rem" colorScheme="green" onClick={() => approve()}>
            Approve
          </Button>
        ) : (
          <Button ml="1rem" colorScheme="green" onClick={() => mint()}>
            Mint NFT
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default ShowPlant;
