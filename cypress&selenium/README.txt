Kurgulamış olduğumuz Trendyol testlerini başlangıçta Cypress üzerinden hazırladım. Daha sonra karşılaştığım sorunlar sebebiyle ekstra olarak Selenium tarafında da testleri otomatize ettim.

Sorunlarımdan bir tanesi allure'u cypress e entegre edememekti. Daha sonrasında package.js dosyasında değişiklikler yaparak bu sorunu çözdüm ve başarılı bir şekilde raporlama yapabiliyorum.

Diğer bir sorunum register testlerinde buton clickleme işlemini başarıyla tamamlayamamış olmam. Hem cypress hem de selenium tarafında register testlerim click işlemini düzgün yapmadığından dolayı fail veriyor. (Bu durumun fail olmasının yanı sıra test senaryosu hazırlama hakkında checkboxlar tarafında bana artı kattığını düşünüyorum.)

Login Testlerim başarılı bir şekide çalışmakta olup raporlarda mevcuttur.
Not: Ödev tesliminde 'Login Success'  testinde username ve password alanı boş bırakılıp paylaşıldı bu yüzden hata verecektir.



