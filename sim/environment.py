import numpy as np

class Environment:
  """Container class for whole environment"""
  def __init__(self, width, height):
    self.temperature = np.random.rand(width, height)
    self.plant_density = np.random.rand(width, height)

  def get_world_state(self):
    return (self.plant_density, self.temperature)

  def tick(self):
    return True
