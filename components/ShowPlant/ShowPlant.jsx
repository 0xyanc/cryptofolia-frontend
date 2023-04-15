import { Button, Flex, Image, Text, Link, textDecoration } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import IERC20 from "../../abis/IERC20.json";
import { ethers } from "ethers";

const ShowPlant = () => {
  let provider = useProvider();
  let { data: signer } = useSigner();
  const { address, isConnected } = useAccount();
  const [allowance, setAllowance] = useState(0);
  const [balance, _setBalance] = useState();
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
    if (from === address) {
      const valueTransferred = ethers.utils.formatEther(value);
      setBalance(balance - valueTransferred);
    } else if (to === address) {
      const valueTransferred = ethers.utils.formatEther(value);
      setBalance(balance + valueTransferred);
    }
  };

  const getBalance = async () => {
    const userBalance = await readSolarERC20Contract.balanceOf(address);
    setBalance(userBalance);
    console.log(userBalance.toString());
  };

  const mint = async () => {
    const mintNFT = await writeSolarERC20Contract.mint(address, ethers.utils.parseEther(balance));
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

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Text as="b">{Number(balance).toFixed(0)} Total KWH</Text>
      <Image boxSize="400px" objectFit="cover" src="https://www.galaxus.ch/im/Files/6/6/1/8/9/3/1/6/blooming-buddies.jpg" alt="Cactus" />
      <Flex mt="1rem">
        <Link href={uniswapLink} isExternal>
          <Button colorScheme="green">Trade</Button>
        </Link>
        {allowance === 0 ? (
          <Button ml="1rem" colorScheme="green" onClick={() => approve()}>
            Approve Folia
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
