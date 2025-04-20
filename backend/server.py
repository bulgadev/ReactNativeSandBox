from flask import Flask, jsonify, request #jsonify is used to send info to react via json files
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
@app.route('/api/send', methods=["POST", "GET"])
def data_jsonify():
    print('cool')
    return jsonify({"message": "done"})


if __name__ == '__main__':
    app.run(debug=True, port=5000)