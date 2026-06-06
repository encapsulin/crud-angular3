ng build --base-href /angular/crud3/
#aws s3 sync ./dist/appcrud/browser/ s3://demo.encaps.click/crudangular/
aws s3 sync ./dist/appcrud/browser/ s3://demo.encaps.click/angular/crud3/