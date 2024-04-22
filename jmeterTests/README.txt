Load testlerimi Jmeter kullanarak yaptım. Testleri bir kez çalıştırdığımızda hepsi başarılı şekilde sonuç veriyor. Sonsuz döngüde user veya pet oluşturup sildiğimiz için bu  durumda çakışma yaşanacak olup hata oranları yükseliyor. Bunu da Results Tree ve Summary Report kısmından gözlemleyebiliyoruz.

5 farklı Thread altında load testlerimi çalıştırdım. Birinci thread altında bütün testler mevcut. Delete pet kısmında addPet kısmındaki pet ID kullanıldı.
Diğer threadler normal şekilde çalışmakta. Sondaki tekil delete pet testinde updatePet kısmındaki ID kullanılmıştır.