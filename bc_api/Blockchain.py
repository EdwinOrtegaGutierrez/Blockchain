from Block import Block
from time import time

class Blockchain:
    difficulty = 4

    def __init__(self) -> None:
        self.chain = []
        self.unconfirmedTransactions = []
        self.createGenesisBlock()

    def createGenesisBlock(self):
        genesisBlock = Block(0, [], time(), "0" * 64)
        genesisBlock.hash = genesisBlock.computeHash()
        self.chain.append(genesisBlock)

    @property
    def lastBlock(self):
        return self.chain[-1]

    def proofOfWork(self, block):
        computedHash = block.computeHash()
        while not computedHash.startswith('0' * self.difficulty):
            block.nonce += 1
            computedHash = block.computeHash()
        return computedHash

    def addBlock(self, block):
        previousHash = self.lastBlock.hash
        if previousHash != block.previousHash:
            return False
        block.hash = self.proofOfWork(block)
        self.chain.append(block)
        return True

    def isValidProof(self, block, blockHash):
        prefix = self.getDifficulty()
        return blockHash.startswith(prefix) and blockHash == block.computeHash()

    def newTransaction(self, transaction):
        self.unconfirmedTransactions.append(transaction)

    def mine(self):
        if not self.unconfirmedTransactions:
            return False
        lastBlock = self.lastBlock
        newBlock = Block(index=lastBlock.index + 1, transactions=self.unconfirmedTransactions, timestamp=time(), previousHash=lastBlock.hash)
        self.addBlock(newBlock)
        self.unconfirmedTransactions = []
        return newBlock.index

    @classmethod
    def checkChainValidity(cls, chain):
        result = True
        previousHash = "0"*64
        for block in chain:
            blockHash = block.hash
            delattr(block, "hash")
            if not cls.isValidProof(block, block.hash) or previousHash != block.previousHash:
                result = False
                break
            block.hash, previousHash = blockHash, blockHash
        return result

    def __str__(self):
        lastBlock = self.lastBlock
        return f'Index: {lastBlock.index}\nTransactions: {lastBlock.transactions}\nTimestamp: {lastBlock.timestamp}\nPrevious Hash: {lastBlock.previousHash}'