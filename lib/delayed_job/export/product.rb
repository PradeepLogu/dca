class DelayedJob::Export::Product < Struct.new(:store, :user)
  def perform
    filename = "Product Export - #{Time.now.strftime("%d/%m/%Y %I:%M%p")}.csv"
    products = CSV.generate do |csv|
      csv << Product.field_names.map(&:last)

      store.products.find_each do |p|
        csv << [
                  p.category.name,
                  p.brand.name,
                  p.supplier.name,
                  p.tax_rate.amount,
                  p.commission_rate.amount,
                  p.name,
                  p.sku_code,
                  p.number_in_stock,
                  p.description,
                  p.accounting_code,
                  p.supplier_code,
                  p.supply_price,
                  p.retail_price,
                  p.commission_rate_money,
                  p.markup,
                  p.deleted_at,
                  p.barcode,
                  p.logo.image_file_size.blank? ? '' : p.logo.image.url.include?('http') ? p.logo.emage.url : nil,
                  p.low_inventory_reminder,
                  p.archived.to_s
               ]
      end
    end

    ExportMailer.success_notification(products, filename, I18n.t('activerecord.models.product.one'), user).deliver
  end
end
