class CreateCandidates < ActiveRecord::Migration
  def change
    create_table :candidates do |t|
      t.string :name
      t.boolean :employed
      t.integer :jobid
      t.date :available
      t.string :email
      t.string :street
      t.string :state
      t.decimal :desired
      t.decimal :current

      t.timestamps null: false
    end
  end
end
