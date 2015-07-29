# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Candidate.create [
  {name: 'John', employed: true, jobid: 1, available: 20150801, email: 'john@mail.com', street: '1 first street', state: 'VIC', desired: 70000, current: 60000},
  {name: 'Kate', employed: false, jobid: 2, available: 20150901, email: 'kate@mail.com', street: '2nd street', state: 'NSW', desired: 90000, current: 0},
  {name: 'Mike', employed: true, jobid: 3, available: 20150820, email: 'mike@mail.com', street: '3rd street', state: 'QLD', desired: 80000, current: 70000}
]