module Team
  class Data < Grape::API

    resource :candidate do
      desc "List all Candidates"

      get do
        Candidate.all
      end

      desc "create a new candidate"
      params do
        requires :name, type: String
        requires :employed
        requires :available
        requires :email, type: String
        requires :state, type: String
      end

      post do 
        Candidate.create!({
          name:params[:name],
          employed:params[:employed],
          available:params[:available],
          email:params[:email],
          street:params[:street],
          state:params[:state],
          desired:params[:desired],
          current:params[:current]
        })
      end

      desc "delete a candidate"
      params do
        requires :id, type: String
      end
      delete ':id' do 
        Candidate.find(params[:id]).destroy!
      end

      desc "update candidate"
      params do
        requires :id, type: String
        requires :name, type: String
        # requires :employed, type: Boolean
        # requires :available, type: Date
        # requires :email, type: String
        # requires :state, type: String
      end
      put ':id' do 
        Candidate.find(params[:id]).update({
          name:params[:name],
          employed:params[:employed],
          available:params[:available],
          email:params[:email],
          street:params[:street],
          state:params[:state],
          desired:params[:desired],
          current:params[:current]
        })
      end
    end
  end
end