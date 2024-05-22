from flask import Flask, request
from Blockchain import Blockchain
from time import time

app = Flask(__name__)

# Configura CORS manualmente
@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:4200'  # Cambia esto al dominio correcto
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


blockchain = Blockchain()

@app.route('/newTransaction', methods=['POST'])
def newTransaction():
    txData = request.get_json()
    requireFields = ["Author", "Content"]
    for field in requireFields:
        if not txData.get(field):
            return {"success":False}, 404
        
    txData["timestamp"] = time()
    blockchain.newTransaction(txData)
    return {"success":True}, 200, {'Access-Control-Allow-Origin': '*'}

@app.route('/chain', methods=['GET'])
def chain():
    chainData = []
    for index, block in enumerate(blockchain.chain):
        if index > 0:
            chainData.append(block.__dict__)
    return {"length":len(chainData), "chain":chainData}
    
@app.route('/mine', methods=['GET'])
def mine():
    result = blockchain.mine()
    if not result:
        return {"message":"Nothing to mine"}
    return {"message":f"Block {result} is mined"}

@app.route('/pendingTx', methods=['POST'])
def pendingTx():
    return blockchain.unconfirmedTransactions

if __name__ == "__main__":
    app.run(
        host = '0.0.0.0', 
        port=80, 
        debug=True)