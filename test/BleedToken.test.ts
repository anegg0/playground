import { expect } from "chai";
import { ethers } from "hardhat";

describe("Bleed", function () {
  it("Should return name Token", async function () {
    const Token = await ethers.getContractFactory("Bleed");
    const token = await Token.deploy();
    await token.deployed();

    expect(await token.name()).to.equal("Bleed");
  });
});