class Employee():

  def set_id(self, id):
    self.id = id

  def set_name(self, name):
    self.name = name

  def get_id(self):
    return self.id

  def get_name(self):
    return self.name


employee = Employee()

employee.set_id(1)
employee.set_name('Name')

print(employee.get_id())
print(employee.get_name())
