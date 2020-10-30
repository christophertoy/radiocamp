class BroadcastersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_broadcaster, only: [:show, :edit, :update, :destroy]

  # Search function
  def search
    query = params[:query].downcase
    @shows = Show.where(broadcaster_id: Broadcaster.where('handle = ?', params[:broadcaster_handle]))
    @episodes = Episode.where(show_id: @shows)
    @data = @shows + @episodes
    @results = @data.select do |record|
      # record.description && record.description.include?(query) || record.has_attribute? (:title) && record.title.include?(query) || record.name && record.name.include?(query)
      # record.respond_to? :title && record.title != nil && record.title.include?(query)
      description_matches = record.respond_to?(:description) && record.description != nil && record.description.downcase.include?(query)
      title_matches = record.respond_to?(:title) && record.title != nil && record.title.downcase.include?(query)
      name_matches = record.respond_to?(:name) && record.name != nil && record.name.downcase.include?(query)

      description_matches || title_matches || name_matches
    end

    render json: @results
  end

  # GET /broadcasters
  # GET /broadcasters.json
  def index
    @broadcasters = Broadcaster.all
  end

  # GET /broadcasters/1
  # GET /broadcasters/1.json
  def show
  end

  # GET /broadcasters/new
  def new
    @broadcaster = Broadcaster.new
  end

  # GET /broadcasters/1/edit
  def edit
  end

  # POST /broadcasters
  # POST /broadcasters.json
  def create
    @broadcaster = Broadcaster.new(broadcaster_params)

    respond_to do |format|
      if @broadcaster.save
        format.html { redirect_to @broadcaster, notice: 'Broadcaster was successfully created.' }
        format.json { render :show, status: :created, location: @broadcaster }
      else
        format.html { render :new }
        format.json { render json: @broadcaster.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /broadcasters/1
  # PATCH/PUT /broadcasters/1.json
  def update
    respond_to do |format|
      if @broadcaster.update(broadcaster_params)
        format.html { redirect_to @broadcaster, notice: 'Broadcaster was successfully updated.' }
        format.json { render :show, status: :ok, location: @broadcaster }
      else
        format.html { render :edit }
        format.json { render json: @broadcaster.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /broadcasters/1
  # DELETE /broadcasters/1.json
  def destroy
    @broadcaster.destroy
    respond_to do |format|
      format.html { redirect_to broadcasters_url, notice: 'Broadcaster was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_broadcaster
      @broadcaster = Broadcaster.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def broadcaster_params
      params.require(:broadcaster).permit(:handle, :name, :logo, :description, :theme)
    end
end
