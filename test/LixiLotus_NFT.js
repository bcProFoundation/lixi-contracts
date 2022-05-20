const LixiLotus_NFT = artifacts.require("LixiLotus_NFT");
const truffleAssert = require('truffle-assertions');

contract("LixiLotus_NFT", async (accounts) => {

  const [deployerAddress, tokenHolderOneAddress, tokenHolderTwoAddress] = accounts;

  it("should be successful mint by owner", async () => {
    const instance = await LixiLotus_NFT.deployed();

    const result = await instance.mintNFT(tokenHolderOneAddress);

    truffleAssert.eventEmitted(result, 'Transfer', {
      from: '0x0000000000000000000000000000000000000000',
      to: tokenHolderOneAddress,
    });

  });
});