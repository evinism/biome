import numpy as np


class BiomeEnvironment:
  """Container class for whole environment"""
  def __init__(self, width, height):
    self.width = width
    self.height = height
    self.temperature = np.random.rand(width, height)
    self.plant_density = np.zeros((width, height))
    self.history = [self.plant_density] * 5

  def get_world_state(self):
    return (self.plant_density, self.temperature)

  def fuzz(self, value):
    return value * 5/6 + np.random.rand(self.width, self.height) / 6

  def tick(self):
    print("updating plants")
    old_density = self.plant_density
    two_ago = self.history[-2]
    one_ago = self.history[-1]
    first_deriv = old_density - one_ago
    second_deriv = (old_density - one_ago) - (one_ago - two_ago)
    new_density = (old_density * .05 - first_deriv * .20 + second_deriv * .75)

    self.history.append(old_density)
    self.plant_density = self.fuzz(new_density)
