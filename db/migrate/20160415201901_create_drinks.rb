class CreateDrinks < ActiveRecord::Migration
  def change
    create_table :drinks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.timestamps null: false
    end
  end
end
