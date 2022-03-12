const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Campaign wallet", function () {

    
    before(async function () {
        this.Wallet = await ethers.getContractFactory("CampaignWallet");
        this.Dollar = await ethers.getContractFactory("MyERC20");
       
        this.users = await ethers.getSigners();
        this.beneficiary = this.users[0];
        
        this.target = ethers.BigNumber.from(80);
        this.maxcap = ethers.BigNumber.from(95);
        this.stopblock = ethers.BigNumber.from(100);
        console.log(this.target.toString());
    });
    
    beforeEach(async function () {
        this.asset = await this.Dollar.deploy(ethers.BigNumber.from("100"));
        await this.asset.deployed();        
        this.wallet = await this.Wallet.deploy(
            "My Campaign Wallet",
            "rcMCW", 
            this.asset.address,
            this.target,
            this.maxcap,
            this.stopblock, 
            this.beneficiary.address
        );
        await this.wallet.deployed();

        //give every user 10 coins
        for(i = 0;i<10;i++){
            tx = await this.asset.transfer(this.users[i].address, ethers.BigNumber.from(10));
            await tx.wait();
        }

        for(i = 0;i<10;i++){
            let balance = await this.asset.balanceOf(this.users[i].address);
            expect(balance.toString()).to.equal('10',"must be 10");
        }


        
    });

    it("Do stuff", async function () {
        let amount = 1;
    });
});
