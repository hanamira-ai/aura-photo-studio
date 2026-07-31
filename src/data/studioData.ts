import { PortfolioItem, StudioServiceItem, OnLocationServiceItem, BlogPost } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Kenangan Abadi Keluarga Miller',
    category: 'Family',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200',
    location: 'Aura Studio A',
    year: '2025',
    aspectRatio: 'wide',
    description: 'Sesi foto keluarga yang hangat dan abadi di studio indoor utama kami, merayakan tiga generasi.'
  },
  {
    id: 'p2',
    title: 'Produk Skincare Botani Artisanal',
    category: 'Product',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    location: 'Aura Studio Produk',
    year: '2025',
    aspectRatio: 'tall',
    description: 'Fotografi produk e-commerce dan editorial dengan bayangan studio yang lembut serta properti estetik.'
  },
  {
    id: 'p3',
    title: 'Bulan Pertama Maya',
    category: 'Newborn',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000',
    location: 'Aura Studio B (Steril)',
    year: '2025',
    aspectRatio: 'tall',
    description: 'Sesi newborn yang lembut dan hangat menggunakan kain katun organik pilihan serta pencahayaan alami studio.'
  },
  {
    id: 'p4',
    title: 'Seri Pas Foto Formal & Eksekutif',
    category: 'Studio',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200',
    location: 'Aura Portrait Studio',
    year: '2025',
    aspectRatio: 'wide',
    description: 'Pas foto resmi presisi tinggi dan foto portrait eksekutif profesional dengan pengerjaan langsung.'
  },
  {
    id: 'p5',
    title: 'Janji Suci Dua Hati',
    category: 'Weddings',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    location: 'Luar Studio — Big Sur',
    year: '2025',
    aspectRatio: 'wide',
    description: 'Fotografi wedding penuh suasana yang mengabadikan emosi jujur, resepsi hangat, dan cahaya senja yang indah.'
  },
  {
    id: 'p6',
    title: 'Prewedding Pesisir Pantai',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000',
    location: 'Luar Studio — Malibu',
    year: '2025',
    aspectRatio: 'tall',
    description: 'Sesi foto prewedding pasangan di luar studio yang romantis di bawah hangatnya sinar matahari sore.'
  }
];

export const STUDIO_SERVICES: StudioServiceItem[] = [
  {
    id: 's1',
    title: 'Pas Foto / ID Photo',
    subtitle: 'Foto Resmi Dokumen & ID',
    iconName: 'UserCheck',
    description: 'Pas foto formal untuk dokumen resmi, pengerjaan cepat dengan pencahayaan presisi dan akurasi warna tinggi.',
    startingPrice: '$25',
    features: [
      'Pratinjau & pilih foto langsung di studio',
      'Sesuai standar paspor & visa resmi',
      'File digital HD hasil retouch halus',
      'Cetak fisik siap pakai (4x6 / 3x4 / 2x3)'
    ]
  },
  {
    id: 's2',
    title: 'Foto Keluarga',
    subtitle: 'Kenangan Abadi Lintas Generasi',
    iconName: 'Users',
    description: 'Foto keluarga yang hangat dan natural untuk dikenang sepanjang masa di studio indoor yang nyaman.',
    startingPrice: '$180',
    features: [
      '60 menit sesi foto studio',
      'Pilihan berbagai backdrop & arahan gaya',
      'Foto seluruh keluarga & variasi grup',
      '15 file digital HD teredit sempurna'
    ]
  },
  {
    id: 's3',
    title: 'Foto Grup / Instansi',
    subtitle: 'Tim, Perusahaan & Komunitas',
    iconName: 'Building2',
    description: 'Foto grup profesional untuk tim perusahaan, komunitas, pengurus, dan dokumentasi organisasi.',
    startingPrice: '$250',
    features: [
      'Pencahayaan studio multi-point khusus',
      'Backdrop polos putih, abu-abu, atau custom',
      'Foto portrait individu + komposit tim',
      'Hak lisensi komersial penuh'
    ]
  },
  {
    id: 's4',
    title: 'Foto Produk',
    subtitle: 'Visual E-Commerce & Katalog',
    iconName: 'Package',
    description: 'Foto produk bersih dan profesional untuk e-commerce, katalog, lookbook, serta iklan cetak.',
    startingPrice: '$220',
    features: [
      'Backdrop studio putih murni (255)',
      'Optimasi tekstur & pencahayaan detail',
      'Foto sudut hero & macro close-up',
      'File siap web & cetak resolusi tinggi'
    ]
  },
  {
    id: 's5',
    title: 'Newborn & Kids',
    subtitle: 'Sesi Foto Nyaman & Steril',
    iconName: 'Baby',
    description: 'Sesi foto bayi dan anak-anak yang aman dan lembut di lingkungan studio yang steril dan nyaman.',
    startingPrice: '$200',
    features: [
      'Properti steril & kain organik lembut',
      'Suasana studio tenang, hangat & nyaman',
      'Tempo pemotretan sabar & santai',
      'Foto pelukan hangat orang tua & saudara'
    ]
  },
  {
    id: 's6',
    title: 'Sesi Studio Custom / Tematik',
    subtitle: 'Konsep & Set Dekorasi Khusus',
    iconName: 'Sparkles',
    description: 'Penataan studio khusus dengan backdrop custom, properti artistik, dan palet warna pilihan Anda.',
    startingPrice: '$300',
    features: [
      'Konsultasi moodboard sebelum sesi',
      'Desain set & pembuatan backdrop custom',
      'Saran tata busana & gaya visual',
      'Gradasi warna halus kelas fine-art'
    ]
  }
];

export const ON_LOCATION_SERVICES: OnLocationServiceItem[] = [
  {
    id: 'ol1',
    title: 'Fotografi Wedding',
    subtitle: 'Dokumentasi Wedding Sinematik & Fine-Art',
    iconName: 'Heart',
    description: 'Dokumentasi wedding menyeluruh yang mengabadikan tawa hangat, haru bahagia, dan momen sakral Anda.',
    startingPrice: '$3,200',
    highlights: [
      'Pilihan liputan penuh seharian',
      '400+ foto terpilih terkurasi & teredit',
      'Galeri arsip online pribadi',
      'Bonus mini-session prewedding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ol2',
    title: 'Prewedding Photoshoot',
    subtitle: 'Sesi Romantis Luar Studio & Perkotaan',
    iconName: 'Camera',
    description: 'Sesi foto pasangan bergaya sinematik dengan latar pemandangan alam, pantai, atau arsitektur perkotaan.',
    startingPrice: '$850',
    highlights: [
      '3 jam sesi foto lokasi pilihan',
      'Survei lokasi & ganti busana',
      '50 file digital HD teredit',
      'Pratinjau desain album cetak custom'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ol3',
    title: 'Dokumentasi Acara',
    subtitle: 'Gala, Peluncuran Produk & Perayaan',
    iconName: 'Calendar',
    description: 'Fotografi profesional untuk gala perusahaan, peluncuran produk, acara budaya, serta perayaan pribadi.',
    startingPrice: '$600',
    highlights: [
      'Liputan per jam atau multi-hari',
      'Hasil foto kilat untuk publikasi media',
      'Foto momen spontan & pembicara utama',
      'Hak unduh digital penuh'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Tips Mempersiapkan Sesi Foto Keluarga di Studio Indoor',
    category: 'Tips Studio',
    date: '18 Juni 2025',
    readTime: '4 mnt baca',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000',
    excerpt: 'Panduan sederhana memilih busana yang serasi, waktu sesi studio, dan menjaga anak-anak tetap santai.',
    content: [
      'Persiapan foto keluarga di lingkungan studio indoor sebaiknya menyenangkan dan tanpa beban.',
      'Kami menyarankan pilihan warna netral yang lembut seperti krem, beige, dan slub linen daripada logo mencolok atau warna neon.',
      'Tim studio kami menyediakan ruangan hangat, tenang, dan nyaman agar seluruh anggota keluarga merasa santai.'
    ]
  },
  {
    id: 'b2',
    title: 'Seni Pencahayaan Produk: Katalog vs Sesi Lifestyle Studio',
    category: 'Komersial',
    date: '30 Mei 2025',
    readTime: '5 mnt baca',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    excerpt: 'Mengapa brand e-commerce memadukan foto produk latar putih bersih dengan set lifestyle studio.',
    content: [
      'Dalam e-commerce modern, pelanggan membutuhkan kejelasan detail produk serta keterikatan visual.',
      'Di aura PHOTO Studio, kami merancang pencahayaan tanpa bayangan untuk katalog e-commerce serta set bergaya lifestyle.'
    ]
  },
  {
    id: 'b3',
    title: 'Mengabadikan Cahaya Wedding Luar Studio dari Sore hingga Malam',
    category: 'Wedding',
    date: '22 April 2025',
    readTime: '6 mnt baca',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    excerpt: 'Memadukan cahaya alami matahari terbenam dengan lampu tambahan untuk foto wedding yang dramatis.',
    content: [
      'Perpindahan dari pemberkatan outdoor menuju resepsi indoor membutuhkan penguasaan pencahayaan yang halus.'
    ]
  }
];

export const STUDIO_INFO = {
  name: "aura PHOTO Studio",
  tagline: "Studio Foto Profesional & Liputan Luar Studio",
  shortBio: "aura PHOTO Studio adalah studio foto profesional yang menyediakan sesi studio indoor — mulai dari pas foto, foto keluarga, foto produk, hingga newborn — serta layanan liputan wedding dan acara spesial di luar studio.",
  fullBio: `Selamat datang di aura PHOTO Studio. Kami adalah studio foto profesional yang berdedikasi mengabadikan setiap momen berharga Anda menjadi karya seni yang indah dan tak lekang oleh waktu.

Fasilitas utama kami adalah ruang studio indoor modern yang dilengkapi peralatan pencahayaan profesional, berbagai pilihan backdrop, serta area khusus untuk Pas Foto / ID Photo, foto keluarga, foto grup instansi, foto produk e-commerce, dan foto newborn yang nyaman.

Selain sesi foto di studio, aura PHOTO Studio juga menyediakan layanan liputan luar studio menyeluruh untuk wedding, prewedding photoshoot, serta dokumentasi acara spesial. Setiap sesi dipersiapkan dengan penuh perhatian pada pencahayaan, komposisi, serta kehangatan interaksi.`,
  stats: [
    { label: "SESI STUDIO / TAHUN", value: "850+" },
    { label: "PAS FOTO & PORTRAIT", value: "2.400+" },
    { label: "WEDDING & ACARA", value: "150+" },
    { label: "KEPUASAN KLIEN", value: "99,8%" }
  ]
};
