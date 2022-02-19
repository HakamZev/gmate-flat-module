const GMATE_ITEMS = {
  S01: {
		kondisi: 'K01',
			 soal: '<p>Jika berwisata ke Taman Bunga Indonusa adalah insentif yang nilainya terendah, kepada siapa saja insentif tersebut akan Anda berikan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Kelly, Sunarto, Chris, Truno<span>' },
			{ key: 'p2', html: '<span>Kelly, Sunarto, Sandra, Chris<span>' },
			{ key: 'p3', html: '<span>Tina, Sunarto, Kelly, Sandra<span>' },
			{ key: 'p4', html: '<span>Muladi, Sunarto, Kelly, Truno<span>' },
			{ key: 'p5', html: '<span>Kelly, Sandra, Sunarto, Truno<span>' },
		]
	},
	S02: {
		kondisi: 'K01',
			 soal: '<p>Jika tiga peringkat teratas paket ke luar negeri adalah ke Amerika Serikat (sudah diberikan ke Muladi), ke Perancis (sudah diberikan ke Petra), dan ke Inggris; siapakah yang berhak menerima paket ke Inggris?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Lisa<span>' },
			{ key: 'p2', html: '<span>Sambas<span>' },
			{ key: 'p3', html: '<span>Tina<span>' },
			{ key: 'p4', html: '<span>Sandra<span>' },
			{ key: 'p5', html: '<span>Chris<span>' },
		]
	},
	S03: {
		kondisi: 'K01',
			 soal: '<p>Jika tiga paket ke luar kota peringkatnya adalah: ke Bali dan Lombok selama 2 minggu, kemudian ke Bali 1 minggu dan ke Bali 3 hari, siapa saja yang berhak menerima paket tersebut sesuai dengan urutan peringkatnya? (urutan nama menunjukkan peringkat)</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Sambas, Tina, Sandra<span>' },
			{ key: 'p2', html: '<span>Tina, Sandra, Sambas<span>' },
			{ key: 'p3', html: '<span>Sambas, Sandra, Tina<span>' },
			{ key: 'p4', html: '<span>Tina, Sambas, Sandra<span>' },
			{ key: 'p5', html: '<span>Sandra, Sambas, Tina<span>' },
		]
	},
	S04: {
		kondisi: 'K02',
			 soal: '<p>Perusahaan mana yang mempunyai keuntungan kumulatif tertinggi untuk kuartal 3 dan 4?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>JKL<span>' },
			{ key: 'p2', html: '<span>DEF<span>' },
			{ key: 'p3', html: '<span>ABC<span>' },
			{ key: 'p4', html: '<span>MNO<span>' },
			{ key: 'p5', html: '<span>GHI<span>' },
		]
	},
	S05: {
		kondisi: 'K03',
			 soal: '<p>Pernyataan mana di bawah ini yang paling akurat sehubungan dengan informasi yang Anda miliki?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Karyawan lebih tua selalu dipromosikan sebelum karyawan lebih muda<span>' },
			{ key: 'p2', html: '<span>Komentar pribadi jelas berpengaruh dalam proses promosi<span>' },
			{ key: 'p3', html: '<span>Masa kerja di posisi saat ini dapat menutupi kinerja yang kurang sempurna<span>' },
			{ key: 'p4', html: '<span>Jarwo dipromosikan menggunakan tolok ukur yang subjektif<span>' },
			{ key: 'p5', html: '<span>Gunawan dan Elizabeth akan dipromosikan pada proses promosi berikutnya<span>' },
		]
	},
	S06: {
		kondisi: 'K04',
			 soal: '<p>Berdasarkan informasi di atas, sepatu merek apa yang dianggap paling mampu memenuhi keinginan pasar sepatu sport untuk anak muda?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Niko<span>' },
			{ key: 'p2', html: '<span>Tiger<span>' },
			{ key: 'p3', html: '<span>Elang<span>' },
			{ key: 'p4', html: '<span>Advantage<span>' },
			{ key: 'p5', html: '<span>Newlife<span>' },
		]
	},
	S07: {
		kondisi: 'K04',
			 soal: '<p>Sepatu merek apa yang dianggap paling mampu memenuhi keinginan pasar sepatu sport untuk anak muda dalam hal harga, tanpa mempedulikan masalah keawetan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Elang<span>' },
			{ key: 'p2', html: '<span>Advantage<span>' },
			{ key: 'p3', html: '<span>Niko<span>' },
			{ key: 'p4', html: '<span>Tiger<span>' },
			{ key: 'p5', html: '<span>Newlife<span>' },
		]
	},
	S08: {
		kondisi: 'K04',
			 soal: '<p>Sepatu merek apa yang anda anggap dapat meraih pasar terbesar untuk mereka yang mengutamakan penampilan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Niko<span>' },
			{ key: 'p2', html: '<span>Tiger<span>' },
			{ key: 'p3', html: '<span>Elang<span>' },
			{ key: 'p4', html: '<span>Advantage<span>' },
			{ key: 'p5', html: '<span>Newlife<span>' },
		]
	},
	S09: {
		kondisi: 'K05',
			 soal: '<p>Dari pernyataan berikut ini, mana yang tidak akan menghasilkan keputusan &quot;ya&quot; untuk tender sebuah proyek senilai Rp 125.000.000,- ?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Kepala Divisi Pengadaan dan Direktur Operasional menyetujui, tetapi Direktur Utama tidak setuju<span>' },
			{ key: 'p2', html: '<span>Manajer Pembelian, Kepala Divisi Terkait, Kepala Divisi Pengadaan, Direktur Operasional dan Direktur Utama menyetujui.<span>' },
			{ key: 'p3', html: '<span>Kepala Divisi Pengadaan dan Direktur Operasional menyetujui, demikian juga Direktur Utama<span>' },
			{ key: 'p4', html: '<span>Kepala Divisi Pengadaan tidak menyetujui, namun Direktur Operasional dan Direktur Utama menyetujui<span>' },
			{ key: 'p5', html: '<span>Direktur Utama dan Kepala Divisi Pengadaan keduanya menyetujui<span>' },
		]
	},
	S10: {
		kondisi: 'K05',
			 soal: '<p>Untuk tender dengan nilai di atas Rp 500.000.000,- tim yang paling tepat untuk memberikan persetujuan tender tersebut adalah:</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Dir Utama dan Dir. Operasional atau Dir Keuangan<span>' },
			{ key: 'p2', html: '<span>Hanya Direktur Utama<span>' },
			{ key: 'p3', html: '<span>Dir Utama dan Dir. Keuangan<span>' },
			{ key: 'p4', html: '<span>Dir Utama, Dir. Operasional dan Dir Keuangan<span>' },
			{ key: 'p5', html: '<span>Dir Utama, Dir. Operasional dan Kadiv Pengadaan<span>' },
		]
	},
	S11: {
		kondisi: 'K06',
			 soal: '<p>Berdasarkan hasil evaluasi di atas, karyawan mana yang akan Anda pilih untuk menyelesaikan sebuah proyek dengan deadline yang ketat dan melibatkan analisis data yang mendalam? Selain itu, hasil proyek tersebut harus dipresentasikan secara lisan pada pertemuan departemen dalam bahasa yang mudah dipahami.</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Amir<span>' },
			{ key: 'p2', html: '<span>Berta<span>' },
			{ key: 'p3', html: '<span>Carlo<span>' },
			{ key: 'p4', html: '<span>Denny<span>' },
			{ key: 'p5', html: '<span>Erni<span>' },
		]
	},
	S12: {
		kondisi: 'K06',
			 soal: '<p>Berdasarkan hasil evaluasi di atas, siapa yang akan yang anda pilih untuk memimpin proyek dengan anggota tim yang banyak dan beragam serta jangka waktu yang lama?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Carlo<span>' },
			{ key: 'p2', html: '<span>Amir<span>' },
			{ key: 'p3', html: '<span>Berta<span>' },
			{ key: 'p4', html: '<span>Denny<span>' },
			{ key: 'p5', html: '<span>Erni<span>' },
		]
	},
	S13: {
		kondisi: 'K07',
			 soal: '<p>Jika hasil <em>meeting</em> di atas harus Anda sampaikan secara ringkas kepada atasan Anda, mana di antara alternatif berikut ini yang akan Anda pilih sebagai kesimpulan yang Anda ambil?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Ruang kantor mungkin harus diperluas dan produktivitas akan menurun<span>' },
			{ key: 'p2', html: '<span>Perusahaan harus menambah 15 karyawan baru, biaya <em>training</em> akan meningkat, dan ruang kantor diperluas<span>' },
			{ key: 'p3', html: '<span>Jalur produksi A harus menambah lima karyawan baru dan biaya <em>training</em> akan menurun.<span>' },
			{ key: 'p4', html: '<span>Jalur produksi B harus menambah lima karyawan baru dan produktivitas akan menurun<span>' },
			{ key: 'p5', html: '<span>Produktivitas dan biaya <em>training</em> akan meningkat<span>' },
		]
	},
	S14: {
		kondisi: 'K08',
			 soal: '<p>Pada tahap mana saja Gilang akan bekerja?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>3 dan 4<span>' },
			{ key: 'p2', html: '<span>1 dan 4<span>' },
			{ key: 'p3', html: '<span>2 dan 3<span>' },
			{ key: 'p4', html: '<span>2 dan 4<span>' },
			{ key: 'p5', html: '<span>1 dan 3<span>' },
		]
	},
	S15: {
		kondisi: 'K08',
			 soal: '<p>Siapa sajakah anggota tim untuk tahap 1?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Heru dan Tari<span>' },
			{ key: 'p2', html: '<span>Parti dan Tari<span>' },
			{ key: 'p3', html: '<span>Parti dan Heru<span>' },
			{ key: 'p4', html: '<span>Tari dan Yudi<span>' },
			{ key: 'p5', html: '<span>Gilang dan Tari<span>' },
		]
	},
	S16: {
		kondisi: 'K09',
			 soal: '<p>Karyawan mana yang kemungkinan besar dapat Anda andalkan untuk dapat tepat waktu pada meeting di pagi hari?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Yudi<span>' },
			{ key: 'p2', html: '<span>Yuli, Yudi dan Melisa<span>' },
			{ key: 'p3', html: '<span>Yuli<span>' },
			{ key: 'p4', html: '<span>Melisa<span>' },
			{ key: 'p5', html: '<span>Tidak dapat ditentukan<span>' },
		]
	},
	S17: {
		kondisi: 'K09',
			 soal: '<p>Dengan menggunakan informasi kebijakan dan catatan kehadiran Yudi, situasi mana di bawah ini akan/dapat berkonflik dengan kebijakan cuti?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Cuti kematian di bulan Februari<span>' },
			{ key: 'p2', html: '<span>Hari-hari sakit di bulan Januari<span>' },
			{ key: 'p3', html: '<span>19 April hari ijin pribadi<span>' },
			{ key: 'p4', html: '<span>16 Maret hari sakit<span>' },
			{ key: 'p5', html: '<span>Dimintakan pada hari Selasa untuk mengambil cuti pada hari Rabu minggu berikutnya sebagai hari ijin pribadi untuk mempersiapkan pesta ulang tahun anaknya<span>' },
		]
	},
	S18: {
		kondisi: 'K09',
			 soal: '<p>Karyawan mana yang kebiasaan cutinya paling mengkhawatirkan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Yuli<span>' },
			{ key: 'p2', html: '<span>Melisa<span>' },
			{ key: 'p3', html: '<span>Yudi<span>' },
			{ key: 'p4', html: '<span>Melisa dan Yudi<span>' },
			{ key: 'p5', html: '<span>Yuli dan Melisa<span>' },
		]
	},
	S19: {
		kondisi: 'K10',
			 soal: '<p>Sekarang jam 13.00 dan <em>salesman</em> tersebut sedang keluar makan siang. Sebagai manajer, tindakan apa yang paling tepat Anda lakukan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Memberitahukan kepada <em>customer</em> itu bahwa kalau bukan <em>salesman</em> itu, Anda sendiri yang akan menghubunginya hari ini juga untuk memberi informasi yang diminta.<span>' },
			{ key: 'p2', html: '<span>Menanyakan kepada <em>customer</em> itu apakah ia ingin memilih seorang <em>salesman</em> baru atau apakah ia akan lebih suka jika Anda sendiri yang bertindak menjadi <em>salesman</em><span>' },
			{ key: 'p3', html: '<span>Memberitahu <em>customer</em> itu bahwa Anda akan meninggalkan pesan untuk <em>salesman</em> tersebut agar segera menghubunginya<span>' },
			{ key: 'p4', html: '<span>Setuju untuk membantu <em>customer</em> itu dan menjanjikan jawaban dari <em>salesman</em> tersebut pada hari ini sebelum jam 17.00.<span>' },
			{ key: 'p5', html: '<span>Menjelaskan kepada <em>customer</em> bahwa bukanlah tanggungjawab Anda untuk menangani keluhan dan menyarankan agar dia menghubungi <em>customer service</em>.<span>' },
		]
	},
	S20: {
		kondisi: 'K11',
			 soal: '<p>Arti lain dari pernyataan Fred dalam percakapan di atas adalah:</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Fred berpikir bahwa keuntungan jangka pendek selaras dengan keuntungan jangka panjang<span>' },
			{ key: 'p2', html: '<span>Fred ingin menunjukkan bahwa Pak Yunus omong kosong atau mengada-ada.<span>' },
			{ key: 'p3', html: '<span>Fred fokus pada biaya produksi yang dibandingkan dengan harga jual.<span>' },
			{ key: 'p4', html: '<span>Fred mengingatkan pada semua bahwa upaya kerja sama antar departemen tidak berjalan sejak tahun lalu<span>' },
			{ key: 'p5', html: '<span>Fred berpikir keuntungan perusahaan dan ekspansi itu saling bergantung satu sama lain<span>' },
		]
	},
	S21: {
		kondisi: 'K12',
			 soal: '<p>Asumsikan semua pernyataan di bawah benar, pernyataan mana yang paling jelas menunjukkan ketidak-cocokan rumus di atas untuk menghitung tingkat efisiensi?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Penjualan Amy merupakan 40% total penjualan.<span>' },
			{ key: 'p2', html: '<span>Tak seorang pun di antara <em>salesman</em> itu mempunyai tingkat efisiensi yang dapat diterima<span>' },
			{ key: 'p3', html: '<span>Tingkat efisiensi gabungan untuk Melani dan Amy lebih tinggi daripada Lerbin dan Yusti<span>' },
			{ key: 'p4', html: '<span>Yusti menggunakan kebanyakan waktu di luar kantor.<span>' },
			{ key: 'p5', html: '<span>Melani adalah <em>salesman</em> yang paling efisien di perusahaan.<span>' },
		]
	},
	S22: {
		kondisi: 'K13',
			 soal: '<p>Jika Anda diminta untuk mengerjakan riset di luar kantor selama dua jam pada sore hari, hari apakah yang paling cocok?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Kamis<span>' },
			{ key: 'p2', html: '<span>Senin<span>' },
			{ key: 'p3', html: '<span>Selasa<span>' },
			{ key: 'p4', html: '<span>Rabu<span>' },
			{ key: 'p5', html: '<span>Jumat<span>' },
		]
	},
	S23: {
		kondisi: 'K13',
			 soal: '<p>Anda harus ke luar kota pada hari Jumat jam 14.00. Dengan berpegang pada jadwal Anda seperti tercantum pada Kondisi di atas, kapankah waktu terbaik untuk menjadwal-ulang rapat informal dengan staf di kantor?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Selasa jam 14.00<span>' },
			{ key: 'p2', html: '<span>Rabu jam 14.00<span>' },
			{ key: 'p3', html: '<span>Kamis jam 15.00<span>' },
			{ key: 'p4', html: '<span>Senin jam 14.00<span>' },
			{ key: 'p5', html: '<span>Bukan semua di atas<span>' },
		]
	},
	S24: {
		kondisi: 'K13',
			 soal: '<p>Salah seorang klien akan berkunjung ke kantor Anda minggu depan. Hari apa yang paling memungkinkan jika Anda harus menggunakan satu hari penuh dengan klien Anda?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Jumat<span>' },
			{ key: 'p2', html: '<span>Senin<span>' },
			{ key: 'p3', html: '<span>Selasa<span>' },
			{ key: 'p4', html: '<span>Rabu<span>' },
			{ key: 'p5', html: '<span>Kamis<span>' },
		]
	},
	S25: {
		kondisi: 'K14',
			 soal: '<p>Perusahaan Anda sedang mempertimbangkan untuk melakukan restrukturisasi, di mana Anda adalah orang yang diminta untuk mempertimbangkan gagasan itu. Dengan data-data sebagaimana grafik-grafik di atas, rekomendasi terbaik apa yang dapat Anda sampaikan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Jangan sarankan apapun; sampai Anda memperoleh lebih banyak informasi tentang hal-hal yang berhubungan dengan restrukturisasi.<span>' },
			{ key: 'p2', html: '<span>Perusahaan tidak perlu melakukan restrukturisasi<span>' },
			{ key: 'p3', html: '<span>Upayakan agar persentase nilai penjualan tiap cabang menandingi persentase nilai penjualan kompetitor.<span>' },
			{ key: 'p4', html: '<span>Perkuat cabang Jawa Timur dan Jawa Tengah untuk mengambil keuntungan dari lebih kecilnya persentase nilai penjualan kompetitor<span>' },
			{ key: 'p5', html: '<span>Mengurangi persentase nilai penjualan Jawa Barat dan DKI agar setara dengan persentase nilai penjualan kompetitor<span>' },
		]
	},
	S26: {
		kondisi: 'K15',
			 soal: '<p>Siapakah yang Anda asumsikan akan paling jarang mengalami masalah dalam menjalankan pekerjaannya secara keseluruhan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Emil<span>' },
			{ key: 'p2', html: '<span>Ari<span>' },
			{ key: 'p3', html: '<span>Bayu<span>' },
			{ key: 'p4', html: '<span>Cahyo<span>' },
			{ key: 'p5', html: '<span>Dina<span>' },
		]
	},
	S27: {
		kondisi: 'K15',
			 soal: '<p>Siapakah yang paling mungkin mengalami hal berikut ini: mampu bekerja dalam kelompok yang anggotanya berasal dari beragam fungsi, namun akan mengalami kesulitan ketika terlibat pada beberapa kegiatan secara bersamaan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Bayu<span>' },
			{ key: 'p2', html: '<span>Ari<span>' },
			{ key: 'p3', html: '<span>Cahyo<span>' },
			{ key: 'p4', html: '<span>Dina<span>' },
			{ key: 'p5', html: '<span>Emil<span>' },
		]
	},
	S28: {
		kondisi: 'K16',
			 soal: '<p>Berdasarkan tabel rencana pemesanan di atas, Anda mengidentifikasi sebuah pemesanan material yang akan menimbulkan problem produksi. Material apakah yang dimaksud?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Kawat Baja<span>' },
			{ key: 'p2', html: '<span>Baja Gulung<span>' },
			{ key: 'p3', html: '<span>Pipa Aluminium<span>' },
			{ key: 'p4', html: '<span>Besi Cor<span>' },
			{ key: 'p5', html: '<span>Baja Lembaran<span>' },
		]
	},
	S29: {
		kondisi: 'K16',
			 soal: '<p>Berdasarkan data di atas Anda menyadari bahwa ada dokumen penagihan untuk salah satu item yang dipesan Karno akan dipertanyakan oleh bagian Keuangan. Item mana yang memiliki kemungkinan terbesar akan dipertanyakan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Besi Cor<span>' },
			{ key: 'p2', html: '<span>Pipa Baja<span>' },
			{ key: 'p3', html: '<span>Kawat Baja<span>' },
			{ key: 'p4', html: '<span>Baja Lembaran<span>' },
			{ key: 'p5', html: '<span>Baja Gulung<span>' },
		]
	},
	S30: {
		kondisi: 'K17',
			 soal: '<p>Meskipun alokasi waktu Meri pada proyek C, Tomi pada proyek B, dan Sari pada proyek A sama-sama sebesar 10 jam/minggu, tetapi:</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Kontribusi Tomi pada proyek B lebih tinggi dari kontribusi Sari pada Proyek A<span>' },
			{ key: 'p2', html: '<span>Kontribusi Meri terhadap proyek C lebih tinggi dari kontribusi Tomi pada proyek B<span>' },
			{ key: 'p3', html: '<span>Kontribusi Meri terhadap proyek C sama dengan kontribusi Sari pada proyek A<span>' },
			{ key: 'p4', html: '<span>Kontribusi Tomi pada proyek A lebih tinggi dari kontribusi Sari pada Proyek B<span>' },
			{ key: 'p5', html: '<span>Kontribusi Tomi pada proyek B sama dengan kontribusi Sari pada Proyek A<span>' },
		]
	},
	S31: {
		kondisi: 'K17',
			 soal: '<p>Siapakah yang akan paling memberikan dampak terbesar terhadap seluruh proyek ketika dia tidak masuk?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Sari<span>' },
			{ key: 'p2', html: '<span>Meri atau Tomi<span>' },
			{ key: 'p3', html: '<span>Tomi atau Sari<span>' },
			{ key: 'p4', html: '<span>Meri<span>' },
			{ key: 'p5', html: '<span>Tomi<span>' },
		]
	},
	S32: {
		kondisi: 'K18',
			 soal: '<p>Berdasarkan grafik dan tabel di atas, tentukan mana di antara pernyataan-pernyataan berikut yang salah.</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Pada tahun 1999, angka indeks keuntungan divisi A lebih besar daripada divisi B<span>' },
			{ key: 'p2', html: '<span>Pada tahun 2000, nilai keuntungan divisi A adalah Rp 650.000.000,-<span>' },
			{ key: 'p3', html: '<span>Pada tahun 1996, divisi B memiliki angka indeks keuntungan tertinggi<span>' },
			{ key: 'p4', html: '<span>Pada tahun 1997, divisi A dan C sama-sama memberikan keuntungan<span>' },
			{ key: 'p5', html: '<span>Pada tahun 1998, angka indeks keuntungan divisi C lebih kecil dari pada divisi B<span>' },
		]
	},
	S33: {
		kondisi: 'K19',
			 soal: '<p>Mana pengaturan <em>display/set</em> berikut yang harus dihindari oleh <em>salesman</em> Anda?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Program SIMKEU, Komputer PC BIM, dan Monitor GL<span>' },
			{ key: 'p2', html: '<span>Program SIMKEU, Notebook Anyer, dan Monitor GL<span>' },
			{ key: 'p3', html: '<span>Notebook Anyer, Monitor GL, dan Printer Conan<span>' },
			{ key: 'p4', html: '<span>Mouse Logik, Komputer BIM, dan Printer Conan<span>' },
			{ key: 'p5', html: '<span>Mouse Logik, Komputer BIM, dan Printer Conan<span>' },
		]
	},
	S34: {
		kondisi: 'K19',
			 soal: '<p>Jika komputer BIM tidak dijadikan satu dengan <em>printer</em> Conan, produk apa saja yang bisa digabung dengan komputer BIM?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Program SIMKEU dan <em>Notebook</em> Anyer<span>' },
			{ key: 'p2', html: '<span>Mouse Logik dan Monitor GL<span>' },
			{ key: 'p3', html: '<span>Monitor GL dan Program SIMKEU<span>' },
			{ key: 'p4', html: '<span>Mouse Logic dan <em>Notebook</em> Anyer<span>' },
			{ key: 'p5', html: '<span>Bukan semua jawaban di atas<span>' },
		]
	},
	S35: {
		kondisi: 'K20',
			 soal: '<p>Kedua perusahaan di atas menawarkan untuk memberikan pelayanan mesin fotokopi dengan kesepakatan <em>service</em> seperti di atas. Mesin fotokopi yang mereka tawarkan berasal dari merek dan tipe yang sama, namun pelayanannya yang berbeda. Jika Anda memilih perusahaan fotokopi BERSAUDARA, alasan apa yang mendasari keputusan tersebut?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Anda merasa lebih cocok mempunyai kontrak dengan perusahaan yang sudah mapan.<span>' },
			{ key: 'p2', html: '<span>Perusahaan BERSAUDARA tidak menarik biaya perjalanan untuk 5 kilometer pertama.<span>' },
			{ key: 'p3', html: '<span>Jenis mesin fotokopi lebih penting daripada biaya <em>service</em>.<span>' },
			{ key: 'p4', html: '<span>Biaya sifatnya kritikal dan perusahaan BERSAUDARA akan melayani pembelanjaan besar.<span>' },
			{ key: 'p5', html: '<span>Perusahaan Anda tidak berencana membeli sebuah mesin fotokopi sampai layanan ini tidak berjalan lancar; sehingga garansi penggantian <em>spare-parts</em> menjadi penting.<span>' },
		]
	},
	S36: {
		kondisi: 'K21',
			 soal: '<p>Perusahaan Anda mengadakan Program Pelatihan Manajemen Madya. Semua supervisor yang berminat mengikuti program tersebut diharuskan mencapai nilai minimal pada sejumlah tes: nilai 40 untuk Keterampilan Verbal, nilai 45 untuk Pemahaman Bacaan, dan nilai 30 untuk Penalaran Matematika. Siapa di antara supervisor di bawah ini yang memenuhi syarat untuk mengikuti program pelatihan tersebut?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Karmila, Rudi<span>' },
			{ key: 'p2', html: '<span>Budi, Karmila<span>' },
			{ key: 'p3', html: '<span>Budi, Karmila, Rudi<span>' },
			{ key: 'p4', html: '<span>Karno, Karmila, Rudi<span>' },
			{ key: 'p5', html: '<span>Budi, Karno, Rudi<span>' },
		]
	},
	S37: {
		kondisi: 'K21',
			 soal: '<p>Ada sejumlah inisiatif proyek baru akan dilakukan dalam waktu 12 bulan mendatang. Untuk bisa terlibat dalam proyek tersebut, para supervisor harus mencapai nilai 25, 23, dan 35 berturut-turut pada tes Penalaran Matematika, Keterampilan Verbal dan Pemahaman Bacaan.<br/>Bagi supervisor yang dua dari tiga nilai tersebut di atas masih di bawah persyaratan diberi kesempatan untuk mengikuti pelatihan khusus. Siapa saja yang punya kesempatan untuk mengikuti pelatihan khusus tersebut?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Gina dan Sumadi<span>' },
			{ key: 'p2', html: '<span>Budi saja<span>' },
			{ key: 'p3', html: '<span>Sumadi saja<span>' },
			{ key: 'p4', html: '<span>Gina saja<span>' },
			{ key: 'p5', html: '<span>Budi dan Gina<span>' },
		]
	},
	S38: {
		kondisi: 'K22',
			 soal: '<p>Manakah alasan keluar yang mengindikasikan ketidakmampuan orang untuk menetapkan prioritas dan mengorganisasikan tugas-tugas?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>5<span>' },
			{ key: 'p2', html: '<span>1<span>' },
			{ key: 'p3', html: '<span>2<span>' },
			{ key: 'p4', html: '<span>3<span>' },
			{ key: 'p5', html: '<span>4<span>' },
		]
	},
	S39: {
		kondisi: 'K22',
			 soal: '<p>Jika penjelasan mengenai tugas dan tanggung jawab pekerjaan yang diberikan kepada para pelamar cukup jelas dan tidak dilebih-lebihkan; alasan keluar manakah yang paling mungkin akan berkurang?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>1 dan 5<span>' },
			{ key: 'p2', html: '<span>1<span>' },
			{ key: 'p3', html: '<span>2<span>' },
			{ key: 'p4', html: '<span>5<span>' },
			{ key: 'p5', html: '<span>1 dan 2<span>' },
		]
	},
	S40: {
		kondisi: 'K23',
			 soal: '<p>Anda tersinggung karena bukan haknya untuk memutuskan hal tersebut, namun Anda tidak ingin menambah jarak lebih jauh lagi. Langkah apa terbaik untuk Anda lakukan?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Kontrak itu tetap berlaku, namun informasikan kepada manajemen yang lebih tinggi mengenai adanya pelanggaran prosedur<span>' },
			{ key: 'p2', html: '<span>Menyetujui keputusan Pundi dan kontrak itu berlaku<span>' },
			{ key: 'p3', html: '<span>Hubungi Bina Utama, dan jelaskan bahwa kontrak itu tidak sah namun mereka masih punya kesempatan untuk mendapatkan yang sah<span>' },
			{ key: 'p4', html: '<span>Jelaskan proses evaluasi tawaran kepada Pundi, dan biarkan dia memutuskan apakah kontrak itu masih berlaku atau tidak<span>' },
			{ key: 'p5', html: '<span>Lakukan proses evaluasi tawaran seperti biasa, dan abaikan kontrak yang dibuat oleh Pundi<span>' },
		]
	},
	S41: {
		kondisi: 'K24',
			 soal: '<p>Berdasarkan informasi dan grafik di atas, pada kuartal ke berapa konfigurasi kondisi jumlah pekerja dibandingkan dengan rerata produksi paling optimal?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Kuartal ke-1<span>' },
			{ key: 'p2', html: '<span>Kuartal ke-2<span>' },
			{ key: 'p3', html: '<span>Kuartal ke-3<span>' },
			{ key: 'p4', html: '<span>Kuartal ke-4<span>' },
			{ key: 'p5', html: '<span>Bukan semua di atas<span>' },
		]
	},
	S42: {
		kondisi: 'K25',
			 soal: '<p>Berdasarkan grafik di atas, cabang manakah yang bisa dianggap paling efisien?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Yogyakarta<span>' },
			{ key: 'p2', html: '<span>Medan<span>' },
			{ key: 'p3', html: '<span>Surabaya<span>' },
			{ key: 'p4', html: '<span>Surakarta<span>' },
			{ key: 'p5', html: '<span>Denpasar<span>' },
		]
	},
	S43: {
		kondisi: 'K25',
			 soal: '<p>Berdasarkan grafik di atas, cabang mana sajakah yang paling tepat guna untuk dijadikan obyek riset dan pengembangan strategi penjualan dan pemasaran?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Palembang dan Bandung<span>' },
			{ key: 'p2', html: '<span>Surakarta dan Semarang<span>' },
			{ key: 'p3', html: '<span>Yogyakarta dan Jakarta<span>' },
			{ key: 'p4', html: '<span>Bandung dan Jakarta<span>' },
			{ key: 'p5', html: '<span>Yogyakarta dan Palembang<span>' },
		]
	},
	S44: {
		kondisi: 'K25',
			 soal: '<p>Berdasarkan grafik di atas, cabang manakah yang memberi keuntungan paling tinggi?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Medan<span>' },
			{ key: 'p2', html: '<span>Jakarta<span>' },
			{ key: 'p3', html: '<span>Surabaya<span>' },
			{ key: 'p4', html: '<span>Surakarta<span>' },
			{ key: 'p5', html: '<span>Semarang<span>' },
		]
	},
	S45: {
		kondisi: 'K26',
			 soal: '<p>Jika Anda ingin memastikan kedua bawahan Bu Yati yang bertengkar itu ditegur, sementara Anda dan Bu Yati adalah kolega yang setara kedudukannya. Bagaimana cara yang paling diplomatis untuk melakukannya?</p>',
		 faktor: '',
		pilihan: [
			{ key: 'p1', html: '<span>Beritahu Pak Farid mengenai kekhawatiran Anda dengan harapan Beliau akan membicarakannya secara serius dengan Bu Yati.<span>' },
			{ key: 'p2', html: '<span>Dekati karyawan yang masih di situ dan dengan perlahan beri teguran.<span>' },
			{ key: 'p3', html: '<span>Panggil kedua bawahan Bu Yati tersebut ke ruangan Anda setelah Anda berbicara dengan klien Anda.<span>' },
			{ key: 'p4', html: '<span>Dekati Bu Yati dan sarankan agar dia mendisiplin karyawannya.<span>' },
			{ key: 'p5', html: '<span>Selesaikan urusan dengan pelanggan Anda terlebih dahulu baru kemudian memikirkan rencana tindakan sehubungan dengan kasus perdebatan tadi.<span>' },
		]
	}
}

const GMATE_CONDITIONS = {
  K01: `<div>
    <div title="K01" items="3">
    <p>Divisi Anda telah menunjukkan prestasi terbaik pada tahun ini, dan perusahaan memberikan insentif berupa paket liburan ke sejumlah tujuan wisata dalam dan luar negeri. Biasanya, dalam menentukan siapa yang berhak berwisata di dalam kota, ke luar kota atau yang berhak ke luar negeri, tolok ukur utamanya adalah hierarki jabatan dan masa kerja. Namun Anda berpandangan bahwa prestasi kerja (nilai kinerja) merupakan kriteria utama, diikuti dengan yang kedua: hierarki jabatan, lalu gaji dan yang terakhir masa kerja. Untuk membantu Anda mengambil keputusan, Anda telah menentukan bahwa prestasi dua kali lebih penting daripada gaji, dan masa kerja hanya setengah pentingnya dari gaji. Jawablah pertanyaan-pertanyaan berikut berdasarkan informasi di bawah ini.</p>
    <figure><img src="" title="Tabel dan Grafik Hierarki Jabatan"/></figure>
  </div>`,

  K02: `<div>
    <div title="K02" items="1">
    <figure><img src="" title="Keuntungan dari 5 Perusahaan Sejenis"/></figure>
  </div>`,

  K03: `<div>
    <div title="K03" items="1">
    <p>Gosip beredar bahwa sistem promosi karyawan yang terjadi di perusahaan Anda lebih banyak ditentukan secara subjektif. Tetapi, Anda tidak menghiraukan gosip itu dan tetap percaya bahwa aturan perusahaan yang menyatakan prestasi kerja merupakan tolok ukur utama masih berlaku, sehingga seorang karyawan yang berprestasi tetap akan mendapat prioritas untuk dipromosikan tanpa mengandalkan nasib baik.</p> <p>Karena banyaknya keluhan yang diajukan bawahan, Anda perlu mengkaji ulang proses promosi. Departemen HRD memberi Anda daftar yang bersifat rahasia yang digunakan oleh pihak manajemen (tim penilai) dalam menentukan promosi, meskipun tabel/kolom yang berisi komentar pribadi para penilai tidak diikutsertakan.</p>
    <figure><img src="" title="Tabel Kriteria Promosi"/></figure>
  </div>`,

  K04: `<div>
    <div title="K04" items="3">
    <p>Berdasarkan penelitian terhadap beragam sepatu sport untuk anak muda yang telah dilakukan oleh lembaga independen, Anda sebagai Manager Marketing dari sebuah perusahaan distributor peralatan olah raga, diminta untuk mengidentifikasi beragam peluang pemasaran untuk masing-masing produk sepatu tersebut. Adapun hasil penelitiannya adalah sebagai berikut:</p>
    <figure><img src="" title="Tabel Rating Per Merek Sepatu"/></figure>
  </div>`,

  K05: `<div>
    <div title="K05" items="2">
    <h3>Proses Tender PT Tipsani Indonusa</h3>
    <ul>
    <li>Nilai Tender kurang dari Rp. 25.000.000,- disetujui oleh Manajer Pembelian atau Kepala Divisi Terkait</li>
    <li>Nilai Tender antara Rp. 25.000.000,-  s/d Rp. 100.000.000,-  disetujui oleh Kepala Divisi Terkait dan Kepala Divisi Pengadaan</li>
    <li>Nilai Tender lebih dari Rp. 100.000.000,- s/d Rp. 500.000.000,- disetujui oleh Kepala Divisi Pengadaan atau Direktur Operasional; Direktur Utama juga harus menyetujui.</li>
    </ul>
  </div>`,

  K06: `<div>
    <div title="K06" items="2">
    <h3>Ringkasan Hasil Evaluasi Karyawan</h3>
    <p><strong>AMIR</strong> Memiliki kemampuan analisa dan sintesa yang baik meskipun kemampuannya dalam mengorganisir pekerjaan menjadi titik lemahnya. Ia mampu menuangkan hasil analisanya dalam bentuk presentasi lisan maupun tulisan secara baik, namun kurang bisa membangun hubungan kerja sama dengan tim, termasuk dalam memimpin. Ia mampu bekerja baik di bawah tekanan  sama halnya dengan dorongan untuk memberikan prestasi yang terbaik; namun dalam kesehariannya, ia belum bisa menunjukkan prestasi kerja yang baik</p>
    <p><strong>BERTA</strong> Memiliki kemampuan yang baik dalam mengorganisir pekerjaan dengan didukung kemampuan analisa yang mendalam, namun punya kesulitan dalam menyampaikan pikiran dan gagasan secara verbal. Walaupun kooperatif bila bekerja dengan orang lain, ia menunjukkan sikap dingin dan menjaga jarak saat berperan sebagai pemimpin. Dalam kesehariannya, prestasi kerja yang ditunjukkannya tergolong normatif.</p> 
    <p><strong>CARLO</strong> Ia memiliki kemampuan analisa yang memadai, serta menunjukkan ketenangan dan keyakinan saat bekerja dalam tekanan dan memenuhi target. Dalam kesehariannya, prestasi kerja yang ditunjukkannya tergolong normatif. Ia merupakan karyawan terbaru, namun mudah beradaptasi dan menunjukkan sikap kooperatif yang menonjol. Dalam beberapa hal ia juga dapat memainkan peran sebagai pimpinan yang efektif. Kelugasannya tersebut juga tampak saat ia harus mengkomunikasikan gagasannya secara lisan meskipun masih memerlukan perbaikan untuk komunikasi tulisan.</p>
    <p><strong>DENNY</strong> Salah seorang karyawan paling produktif di departemen. Meskipun ia gampang tersinggung dan mempunyai kesulitan dalam berteman atau bergaul dalam kelompok. Ia memiliki kemampuan menyesuaikan diri terhadap tekanan tugas yang baik. Walaupun lancar berbicara, namun gaya berbicaranya tampak kaku. Kemampuan analisa dan sintesanya tergolong rata-rata</p>
    <p><strong>ERNI</strong> Karyawan yang kooperatif dan banyak disukai dengan skill komunikasi yang kuat. Namun sikapnya santai dan tidak suka repot-repot membuat ia kurang optimal dalam mengerjakan tugas analisa dan sintesa. Meskipun ia suka menjadi pemimpin, tetapi kemampuan pengelolaan pekerjaannya tidak optimal. Ia terkadang terlambat memenuhi target namun ia mampu untuk bekerja di bawah tekanan.</p>
  </div>`,

  K07: `<div>
    <div title="K07" items="1">
    <p>Perusahaan Anda, sebuah pabrik <em>manufacturing</em> mesin diesel untuk industri, telah bekerja beberapa bulan dalam rangka mengembangkan sebuah tipe <em>genset</em> (pembangkit listrik) baru. Pada sebuah <em>meeting</em> dengan departemen produksi, dampak pengembangan produk baru itu dipaparkan secara ringkas dan perubahan berikut akan terjadi di jalur produksi A dan/atau B.</p>
    <ul>
    <li>Jalur produksi A akan kekurangan lima karyawan atau jalur produksi B akan kekurangan sepuluh karyawan.</li>
    <li>Biaya <em>training</em> perusahaan akan meningkat jika jalur produksi A menambah karyawan baru.</li> 
    <li>Produktivitas keseluruhan akan menurun jika jalur produksi A atau B menambah karyawan baru.</li> 
    <li>Area kerja harus diperluas jika departemen B menambah karyawan baru.</li>
    </ul>
  </div>`,

  K08: `<div>
    <div title="K08" items="2">
    <p>Sebagai seorang manajer, Anda mempunyai sebuah proyek yang terdiri dari empat tahap. Masing-masing tahap memerlukan waktu dua minggu dan dikerjakan oleh satu tim yang terdiri dari dua orang.</p>
    <p>Anda mempunyai enam orang staff, 4 diantaranya: Yudi, Yuda, Parti, dan Heru yang karena kesibukannya hanya bisa terlibat untuk satu tahap saja; sedangkan dua yang lainnya adalah Tari dan Gilang.</p>
    <p>Parti hanya memiliki waktu luang di bulan pertama dan tidak bisa bekerja sama dengan Tari. Gilang bertanggungjawab untuk implementasi dan lebih suka bekerja di bagian akhir. Yuda hanya bisa bekerja pada tahap dua atau tiga.</p>
    <p>Heru lebih suka bekerja di bulan pertama, namun dia tidak cocok bekerja dengan Parti dan/atau Yudi. Tari adalah pemimpin tim secara keseluruhan sehingga harus bekerja di tahap pertama dan empat. Hal lain yang perlu diperhatikan adalah tak seorang pun boleh bekerja lebih dari dua tahap.</p>
  </div>`,

  K09: `<div>
    <div title="K09" items="3">
    <figure><img src="" title="Gambar Aturan Absensi Karyawan"/></figure>
    <p>Berdasarkan aturan absensi karyawan dan catatan kehadiran enam bulan terakhir dari tiap-tiap karyawan pada kondisi di atas, jawablah pertanyaan-pertanyaan berikut.</p>
  </div>`,

  K10: `<div>
    <div title="K10" items="1">
    <p>Sebagai seorang manajer penjualan, Anda mengetahui bahwa salah seorang <em>salesman</em> Anda tidak menindaklanjuti komitmennya pada seorang customer besar, yang dahulu adalah salah satu dari customer Anda ketika masih menjadi <em>salesman</em>.</p>
    <p>Hari ini, <em>customer</em> tersebut menelpon Anda dan mengeluhkan pelayanan yang kurang memadai dari <em>salesman</em> Anda, terutama ketidakmampuannya untuk memberikan informasi yang diminta secara tepat waktu.</p>
  </div>`,

  K11: `<div>
    <div title="K11" items="1">
    <p>Berikut ini sebuah cuplikan dari sebuah rapat bisnis. Pak Yunus bertindak sebagai ketua panel, dan Fred, seorang manajer Produksi.</p>
    <p>Pak Yunus: &quot;…. dan dengan proses kerja yang selaras dan terpadu antar departemen, serta keseragaman persepsi terhadap visi/misi perusahaan, kita dapat memastikan efisiensi dan efektivitas di setiap lini organisasi yang pada akhirnya akan menjamin tercapainya keuntungan perusahaan.&quot;</p>
    <p>Fred: &quot;Maaf saya berbeda pendapat, Pak, tapi berdasarkan biaya produksi saat ini, akan sulit untuk bisa balik modal di tahun ini, apalagi meraih keuntungan.&quot;</p>
  </div>`,

  K12: `<div>
    <div title="K12" items="1">
    <figure><img src="" title="Gambar Kerja dan Efisiensi"/></figure>
  </div>`,

  K13: `<div>
    <div title="K13" items="3">
    <p>Sebagai manajer keuangan, Anda bekerja di kantor dari jam 09.00 hingga 14.00 setiap hari, kecuali pada hari Kamis, ketika Anda menghadiri rapat perusahaan sebagai wakil divisi dari jam 12.00 hingga 15.00 (Anda tetap bekerja di kantor dari jam 09.00 hingga 12.00).</p> <p>Pada hari Senin, Anda bekerja dengan Agung untuk tugas di luar kantor dari jam 14.00 hingga 17.00. Pada hari Selasa jam 15.00 Anda memimpin rapat sebuah komite, yang biasanya berlangsung hingga jam 17.30 atau 16.00.</p> <p>Pada hari Rabu, Anda harus mengunjungi beberapa cabang mulai jam 14.00. Pada hari Jumat, Anda biasanya mengadakan rapat informal dengan staff kantor dari jam 15.00 hingga 16.00, yang terkadang berlangsung hingga jam 16.30 atau 17.00</p>
  </div>`,

  K14: `<div>
    <div title="K14" items="1">
    <figure>
    <figcaption>Grafik Presentase Nilai Penjualan per Cabang (dibanding total penjualan)</figcaption>
    <img src="" title="Grafik Presentase Nilai Penjualan per Cabang (dibanding total penjualan)"/>
    </figure>
  </div>`,

  K15: `<div>
    <div title="K15" items="2">
    <p></p>
    <figure>
    <figcaption>Tabel Hasil Evaluasi Kemampuan Karyawan</figcaption>
    <img src="" title="Tabel Hasil Evaluasi Kemampuan Karyawan"/>
    </figure>
  </div>`,

  K16: `<div>
    <div title="K16" items="2">
    <p>Tabel di bawah ini dipergunakan oleh Departemen Pembelian untuk memastikan bahwa pesanan material bisa datang tepat waktu agar tidak mengganggu proses produksi. Sebagai Manajer Pembelian, Anda melakukan pengawasan rutin pada bawahan Anda. Berikut ini adalah hasil pekerjaan Karno.</p>
    <figure>
    <img src="" title="Tabel Rencana Pemesanan Material"/>
    </figure>
  </div>`,

  K17: `<div>
    <div title="K17" items="2">
    <figure>
    <figcaption>Tabel Alokasi Waktu per Proyek</figcaption>
    <img src="" title="Tabel Alokasi Waktu per Proyek"/>
    </figure>
  </div>`,

  K18: `<div>
    <div title="K18" items="1">
    <figure>
    <figcaption>Grafik Keuntungan per Tahun Div A, B, dan C</figcaption>
    <img src="" title="Grafik Keuntungan per Tahun Div A, B, dan C"/>
    </figure>
  </div>`,

  K19: `<div>
    <div title="K19" items="2">
    <p>Sebuah perusahaan akan membeli sejumlah perangkat teknologi informasi (IT) dari sebuah distributor perlengkapan komputer. Pada saat penawaran, Anda sebagai Manager Penjualan pada perusahaan distributor tersebut menjelaskan kepada <em>salesman</em> Anda tentang kemungkinan permasalahan yang akan terjadi apabila beberapa perangkat dihubungkan satu sama lain. Beberapa catatan tersebut adalah:</p> <ul> <li>Program Akuntansi SIMKEU akan bermasalah bila digabung dengan <em>printer</em> merek Conan, karena program ini tidak cocok dengan <em>printer</em> Conan</li> <li><em>Notebook</em> merek Anyer tidak cocok dipasangkan dengan <em>wireless mouse</em> merek Logik, karena ketidaksesuaian sistem <em>infrared</em>-nya</li> <li>Komputer PC merek BIM tidak boleh dipadukan dengan monitor merek GL, karena ketidak sesuaian sistem digital-nya.</li> </ul>
  </div>`,

  K20: `<div>
    <div title="K20" items="1">
    <figure>
    <figcaption>Tabel Penawaran Service Fotokopi AMAN</figcaption>
    <img src="" title="Tabel Penawaran Service Fotokopi AMAN"/>
    </figure>
  </div>`,

  K21: `<div>
    <div title="K21" items="2">
    <figure>
    <figcaption>Tabel Hasil Tes Keterampilan Dasar Supervisor</figcaption>
    <img src="" title="Tabel Hasil Tes Keterampilan Dasar Supervisor"/>
    </figure>
  </div>`,

  K22: `<div>
    <div title="K22" items="2">
    <p>Hasil survey terhadap para karyawan yang dengan keluar secara sukarela, menunjukkan bahwa lima alasan tertinggi untuk mencari pekerjaan di tempat lain adalah:</p>
    <ol>
    <li>Kejemuan karena tidak cukup banyak tugas yang non-rutin</li>
    <li>Keinginan untuk mencoba pekerjaan di bidang lain</li>
    <li>Lembur yang diharapkan tidak datang-datang juga</li>
    <li>Tidak cocok dengan rekan sekerja</li>
    <li>Ketidak mampuan menyelesaikan beban pekerjaan.</li> 
    </ol>
  </div>`,

  K23: `<div>
    <div title="K23" items="1">
    <p>Anda adalah manager yang bertanggungjawab atas pengadaan bahan mentah untuk produksi; dan salah satu tugas utamanya adalah mengevaluasi tawaran <em>supplier</em> setiap tahunnya. Tiga minggu yang lalu supervisor Anda pensiun dan digantikan oleh Pundi, seorang supervisor muda yang berkarir pesat yang berasal dari perusahaan kompetitor terbesar.</p>
    <p>Hubungan Anda dengan Pundi belum cukup harmonis, dan pada suatu hari, mendekati akhir proses evaluasi tahunan, Pundi menaruh kontrak dengan <em>supplier</em> Bina Utama, yang sudah dia tandatangani, di meja Anda, sambil memberitahu dia telah memutuskan untuk memilih <em>supplier</em> tersebut.</p>
    <p>Adapun alasannya karena dia pernah bekerja sama dengan Bina Utama di masa lalu dan benar-benar mempercayai produk dan service-nya, sambil menambahkan bahwa dia juga tahu kalau Bina Utama merupakan salah satu <em>supplier</em> yang sedang Anda pertimbangkan.</p>
  </div>`,

  K24: `<div>
    <div title="K24" items="1">
    <p>Anda Manajer HRD yang baru di PLP Industries, yang selama ini selalu mengalami permasalahan naik turunnya jumlah pekerja di pabrik secara tak terduga. Permasalahan menjadi lebih rumit ketika persyaratan produksi minimum per bulan juga fluktuatif sebagaimana permintaan pasar yang juga fluktuatif. Untuk itu Anda perlu terlebih dahulu melakukan pemetaan terhadap fluktuasi jumlah pekerja satu tahun terakhir yang dibandingkan dengan hasil produksi pabrik.</p>
    <figure>
    <img src="" title="Grafik Rerata Produksi tahun 20xx PLP Industries"/>
    </figure>
  </div>`,

  K25: `<div>
    <div title="K25" items="3">
    <figure>
    <img src="" title="Grafik Karyawan per Cabang vs Grafik Profit per Cabang"/>
    </figure>
  </div>`,

  K26: `<div>
    <div title="K26" items="1">
    <p>Anda melihat dua orang bawahan Bu Yati sedang berdebat seru, yang semakin lama meningkat menjadi pertengkaran mulut yang kasar dan mengganggu suasana kerja di sekitarnya, meskipun beberapa saat kemudian perdebatan tersebut berakhir ketika salah seorang bergegas menyingkir.</p>
    <p>Di lain pihak, pada waktu yang bersamaan, di sekitar tempat perdebatan terjadi, Anda melihat Bu Yati sedang berbicara dengan seorang pelanggan; dan setelah pelanggan itu pergi, Bu Yati kembali ke ruang kerjanya tanpa melakukan apa-apa terhadap kedua bawahannya yang berdebat tadi.</p> <p>Anda merasa kedua karyawan tersebut harus ditegur, karena berdebat dan bertengkar mulut di hadapan pelanggan adalah hal yang tabu di perusahaan. Pak Farid, sebagai atasan Anda dan Bu Yati, keluar kantor hari ini; dan Anda sendiri harus menemui pelanggan yang 15 menit lagi akan tiba.</p>
  </div>`
}

exports.version = ""
exports.leaders = []
exports.itemKeys = Object.keys(GMATE_ITEMS)
exports.conditionKeys = Object.keys(GMATE_CONDITIONS)
exports.getItem = (key) => { return GMATE_ITEMS[key] }
exports.getCondition = (key) => { return GMATE_CONDITIONS[key] }
