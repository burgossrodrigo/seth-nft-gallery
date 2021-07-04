const BALANCE = artifacts.require("BALANCE");
const SETH = artifacts.require("SETH");

module.exports = function(deployer) {
  deployer.deploy(BALANCE);
  deployer.deploy(SETH);
};
