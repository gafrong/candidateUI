class API < Grape::API

  version 'v1', using: :path
  mount Team::Data
end