import { expect } from "chai";
import { ethers } from "hardhat";

describe("BleedToken", function () {
  it("Should return the name of BleedToken", async function () {
    const BleedToken = await ethers.getContractFactory("BleedToken");
    const token = await BleedToken.deploy();
    await token.deployed();

    expect(await token.name()).to.equal("Bleed");
  });


  // it("Should return true if the address has been approved", async function () {
  //   const BleedToken = await ethers.getContractFactory("BleedToken");
  //   const token = await BleedToken.deploy();
  //   await token.deployed();

  //   expect(await token.name()).to.equal("Bleed");
  // });
});
