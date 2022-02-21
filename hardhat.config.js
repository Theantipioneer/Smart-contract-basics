require("@nomiclabs/hardhat-waffle");
// import task from '@nomiclabs/hardhat-waffle'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// Solidity version, network, artifacts paths config.
// @Todo hide account key

// After deployment use address deployed to, to interact with the frontend.
module.exports = {
    solidity: "0.8.3",
    networks: {
        hardhat: {},
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/39565d2185cd415eb7d44700fe15eef4",
            accounts: [process.env.RINKEBY_PRIVATE_KEY.toString()],
        },
    },
    paths: {
        artifacts: "./src/artifacts",
    },
};
