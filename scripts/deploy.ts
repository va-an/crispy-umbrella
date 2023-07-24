import { ethers, tenderly } from "hardhat";
import { toBn } from 'evm-bn'

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockFactory = await ethers.getContractFactory("Lock");
  const lock = await lockFactory.deploy(unlockTime);
  const lockAddress = lock.address;

  console.log("Lock deployed to:", lockAddress);

  tenderly.verify({
    name: "Lock",
    address: lockAddress,
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
