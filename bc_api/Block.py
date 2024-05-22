from dataclasses import dataclass
from hashlib import sha256
from json import dumps

@dataclass
class Block:
    index:int 
    transactions:list 
    timestamp:float 
    previousHash:str
    nonce:int = 0

    def computeHash(self) -> str: 
        blockString = dumps(self.__dict__, sort_keys=True)
        return sha256(blockString.encode()).hexdigest()