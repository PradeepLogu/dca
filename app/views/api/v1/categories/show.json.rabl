object :@category

attributes :id, :name, :description, :created_at, :updated_at

node :units_in_stock do
  @category.products.units_in_stock
end

node :stock_value do
  @category.products.stock_value
end

node :avg_monthly_sale do
  @category.average_month_sales
end

node :last_sale do
  @category.last_sale_date
end

child :products do
  attributes :id, :accounting_code, :archived, :barcode, :commission_rate_money,
           :description, :low_inventory_reminder, :markup, :name, :number_in_stock,
           :offer_price, :retail_price, :sent_at, :sku_code, :supplier_code,
           :supply_price

end
