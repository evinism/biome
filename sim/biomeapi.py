from flask import Flask, jsonify
from flask_cors import CORS

class BiomeApi:
  """Api proxy"""

  def __init__(self, env):
    print("starting biome server...")
    app = Flask('API')
    CORS(app)

    @app.route("/")
    def hello():
      return "Hello World!"

    @app.route("/density")
    def plant_density():
      plant_density = env.get_world_state()[0]
      return jsonify(plant_density.tolist())

    app.run()
