class CandidatesController < ApplicationController

  def index 
    @candidates = Candidate.all
    
    responde_to do |format|
      format.html {}
      format.json { render :json => @candidates}
    end
  end

  def create
    @candidate = Candidate.new(candidate_params)
    @candidate.save
    render :json => @candidate
  end

  def destroy
    @candidate = Candidate.find(params[:id])
    @candidate.destroy
    render :json => @candidate
  end

  private

  def candidate_params
    params.require(:candidate).permit(:body)
  end
  
end
