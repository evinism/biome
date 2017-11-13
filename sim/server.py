from flask import Flask, jsonify
from flask_cors import CORS
from environment import Environment

print("starting biome server...")
app = Flask(__name__)
CORS(app)

print('building environment...')
env = Environment(50, 50)

@app.route("/")
def hello():
  return "Hello World!"


@app.route("/density")
def plant_density():
  plant_density = env.get_world_state()[0]
  return jsonify(plant_density.tolist())
