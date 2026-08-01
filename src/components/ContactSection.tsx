import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { ApertureIcon } from './ApertureIcon';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [categoryType, setCategoryType] = useState<'studio' | 'onlocation'>('studio');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: initialService || 'Pas Foto / ID Photo',
    sessionPackage: 'Essential Studio Package',
    date: '',
    participants: '1 - 3 People',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
// EmailJS Configuration
const SERVICE_ID = 'service_zhltmbl';
const TEMPLATE_ID = 'template_g6gkmaf';
const PUBLIC_KEY = 'vw8CC4dx3FzPBsqY1';
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
      // Auto-set category based on initialService
      if (initialService.toLowerCase().includes('wedding') || initialService.toLowerCase().includes('event') || initialService.toLowerCase().includes('prewedding')) {
        setCategoryType('onlocation');
      } else {
        setCategoryType('studio');
      }
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        sessionPackage: formData.sessionPackage,
        date: formData.date,
        participants: formData.participants,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    setSubmitted(true);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Reservasi gagal dikirim. Silakan coba kembali.");
  } finally {
    setLoading(false);
  }
};

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F5] relative border-t border-[#211A24]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.3em] text-[#6B4E9E] font-medium flex items-center gap-2">
                <ApertureIcon className="w-3.5 h-3.5 text-[#6B4E9E]" />
                <span>JADWALKAN SESI &amp; INQUIRY</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl text-[#211A24] font-normal tracking-tight">
                Jadwalkan Sesi Foto Anda
              </h2>

              <p className="text-sm text-[#211A24]/75 font-sans leading-relaxed">
                Pesan sesi foto studio indoor (pas foto, keluarga, produk, newborn, grup) atau ajukan liputan luar studio untuk wedding dan acara spesial Anda melalui formulir reservasi 3 langkah kami.
              </p>

              {/* Direct Info */}
              <div className="space-y-6 pt-4 border-t border-[#211A24]/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-[#211A24]/10 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-[#6B4E9E]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B4E9E] block font-medium">
                      EMAIL STUDIO
                    </span>
                    <a
                      href="mailto:hello@auraphoto.com"
                      className="text-sm text-[#211A24] font-medium hover:text-[#6B4E9E] transition-colors"
                    >
                      hello@auraphoto.com
                    </a>
                  </div>
                </div>

                <a
   href="https://maps.app.goo.gl/naWJfWPSS6HGG9wa7"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-4 group transition-all duration-300 cursor-pointer"
>
  <div className="p-3 bg-white border border-[#211A24]/10 shrink-0 shadow-sm group-hover:border-[#6B4E9E] group-hover:shadow-md transition-all duration-300">
    <MapPin className="w-5 h-5 text-[#C6237E]" />
  </div>

  <div>
    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B4E9E] block font-medium">
      ALAMAT STUDIO
    </span>

    <p className="text-sm text-[#211A24] group-hover:text-[#6B4E9E] transition-colors">
      aura PHOTO Studio, Jl. Raya Ngalian Gang 1,
      <br />
      Kec. Tirto,
      <br />
      Kabupaten Pekalongan,
      <br />
      Jawa Tengah 51151

      <span className="block text-xs text-[#211A24]/60">
        (Studio Indoor + Layanan Liputan Luar Studio)
      </span>
    </p>
  </div>
</a>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-[#211A24]/10 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-[#6B4E9E]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B4E9E] block font-medium">
                      HOTLINE STUDIO
                    </span>
                    <a
                      href="tel:+6285645405305"
                      className="text-sm text-[#211A24] font-medium hover:text-[#6B4E9E] transition-colors"
                    >
                      +62 856 45 405 305
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-6 bg-white border-l-2 border-[#6B4E9E] space-y-1 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B4E9E] font-medium block">
                KONFIRMASI CEPAT &amp; TEPAT WAKTU
              </span>
              <p className="text-xs text-[#211A24]/75 font-sans">
                Sesi foto studio indoor (seperti pas foto) dapat dikonfirmasi di hari yang sama. Penawaran liputan acara &amp; wedding akan dikirimkan dalam 24 jam.
              </p>
            </div>
          </div>

          {/* Right Column: 3-Step Visual Booking Flow (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#211A24]/10 shadow-sm relative">
            
            {/* Step Progress Bar */}
            {!submitted && (
              <div className="mb-8 border-b border-[#211A24]/10 pb-6">
                <div className="grid grid-cols-3 gap-2 text-center relative">
                  {/* Step 1 Indicator */}
                  <div className={`flex flex-col items-center space-y-1.5 cursor-pointer`} onClick={() => setCurrentStep(1)}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      currentStep === 1
                        ? 'bg-[#211A24] text-white shadow-sm'
                        : currentStep > 1
                        ? 'bg-[#6B4E9E] text-white'
                        : 'bg-[#EFECE8] text-[#211A24]/50'
                    }`}>
                      {currentStep > 1 ? <Check className="w-4 h-4" /> : '01'}
                    </div>
                    <span className={`text-[10px] uppercase tracking-[0.15em] font-medium ${
                      currentStep === 1 ? 'text-[#211A24] font-semibold' : 'text-[#211A24]/60'
                    }`}>
                      01. Layanan
                    </span>
                  </div>

                  {/* Step 2 Indicator */}
                  <div className={`flex flex-col items-center space-y-1.5 cursor-pointer`} onClick={() => currentStep > 1 && setCurrentStep(2)}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      currentStep === 2
                        ? 'bg-[#211A24] text-white shadow-sm'
                        : currentStep > 2
                        ? 'bg-[#6B4E9E] text-white'
                        : 'bg-[#EFECE8] text-[#211A24]/50'
                    }`}>
                      {currentStep > 2 ? <Check className="w-4 h-4" /> : '02'}
                    </div>
                    <span className={`text-[10px] uppercase tracking-[0.15em] font-medium ${
                      currentStep === 2 ? 'text-[#211A24] font-semibold' : 'text-[#211A24]/60'
                    }`}>
                      02. Detail
                    </span>
                  </div>

                  {/* Step 3 Indicator */}
                  <div className={`flex flex-col items-center space-y-1.5 cursor-pointer`} onClick={() => currentStep > 2 && setCurrentStep(3)}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      currentStep === 3
                        ? 'bg-[#211A24] text-white shadow-sm'
                        : 'bg-[#EFECE8] text-[#211A24]/50'
                    }`}>
                      03
                    </div>
                    <span className={`text-[10px] uppercase tracking-[0.15em] font-medium ${
                      currentStep === 3 ? 'text-[#211A24] font-semibold' : 'text-[#211A24]/60'
                    }`}>
                      03. Kontak
                    </span>
                  </div>
                </div>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-[#6B4E9E]/10 rounded-full flex items-center justify-center mx-auto text-[#6B4E9E]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl text-[#211A24]">
                  Permintaan Sesi Berhasil Terkirim!
                </h3>
                <p className="text-sm text-[#211A24]/70 max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong className="text-[#211A24]">{formData.name}</strong>. Kami telah menerima permintaan reservasi Anda untuk <strong className="text-[#6B4E9E]">{formData.serviceType}</strong> ({formData.sessionPackage}). Tim aura PHOTO Studio akan segera menghubungi Anda untuk konfirmasi jadwal.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      serviceType: 'Pas Foto / ID Photo',
                      sessionPackage: 'Essential Studio Package',
                      date: '',
                      participants: '1 - 3 People',
                      message: '',
                    });
                  }}
                  className="px-8 py-3 bg-[#211A24] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#6B4E9E] transition-colors"
                >
                  Jadwalkan Sesi Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 01: Service Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-serif text-2xl text-[#211A24]">
                        Langkah 01: Pilih Layanan Fotografi
                      </h3>
                      <p className="text-xs text-[#211A24]/60 mt-1">
                        Pilih antara sesi foto studio indoor atau liputan acara di luar studio.
                      </p>
                    </div>

                    {/* Category Segmented Switcher */}
                    <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#FAF7F5] border border-[#211A24]/10">
                      <button
                        type="button"
                        onClick={() => {
                          setCategoryType('studio');
                          setFormData({ ...formData, serviceType: 'Pas Foto / ID Photo' });
                        }}
                        className={`py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-all ${
                          categoryType === 'studio'
                            ? 'bg-[#211A24] text-white shadow-sm'
                            : 'text-[#211A24]/70 hover:text-[#211A24]'
                        }`}
                      >
                        Studio Indoor
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCategoryType('onlocation');
                          setFormData({ ...formData, serviceType: 'Liputan Wedding' });
                        }}
                        className={`py-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-all ${
                          categoryType === 'onlocation'
                            ? 'bg-[#211A24] text-white shadow-sm'
                            : 'text-[#211A24]/70 hover:text-[#211A24]'
                        }`}
                      >
                        Luar Studio
                      </button>
                    </div>

                    {/* Specific Service Dropdown / Selector */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#211A24]">
                        JENIS SESI SPESIFIK *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#FAF7F5] border border-[#211A24]/15 text-sm text-[#211A24] focus:outline-none focus:border-[#6B4E9E] transition-colors font-medium"
                      >
                        {categoryType === 'studio' ? (
                          <>
                            <option value="Pas Foto / ID Photo">Pas Foto / Official ID Photo (Mulai Rp 150rb)</option>
                            <option value="Foto Keluarga">Foto Keluarga / Family Portrait (Mulai Rp 750rb)</option>
                            <option value="Foto Grup / Instansi">Foto Grup &amp; Instansi / Corporate (Mulai Rp 1.2jt)</option>
                            <option value="Foto Produk E-Commerce">Foto Produk E-Commerce / Commercial (Mulai Rp 950rb)</option>
                            <option value="Foto Newborn & Kids">Foto Newborn &amp; Anak / Kids Portrait (Mulai Rp 850rb)</option>
                            <option value="Sesi Studio Custom">Sesi Studio Custom / Tematik (Mulai Rp 1.5jt)</option>
                          </>
                        ) : (
                          <>
                            <option value="Liputan Wedding">Liputan Wedding Seharian (Mulai Rp 8.5jt)</option>
                            <option value="Prewedding Photoshoot">Sesi Prewedding Photoshoot (Mulai Rp 3.5jt)</option>
                            <option value="Dokumentasi Acara">Dokumentasi Acara &amp; Event (Mulai Rp 2.5jt)</option>
                          </>
                        )}
                      </select>
                    </div>

                    {/* Step 1 Next Button */}
                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-4 bg-[#211A24] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] transition-all duration-300 flex items-center gap-2"
                      >
                        <span>Lanjut: Tanggal &amp; Detail</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 02: Date & Session Details */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-serif text-2xl text-[#211A24]">
                        Langkah 02: Paket Sesi &amp; Tanggal
                      </h3>
                      <p className="text-xs text-[#211A24]/60 mt-1">
                        Pilih tingkatan paket dan tanggal sesi yang Anda harapkan.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Session Package */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#211A24]">
                          PAKET SESI *
                        </label>
                        <select
                          value={formData.sessionPackage}
                          onChange={(e) => setFormData({ ...formData, sessionPackage: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#211A24]/15 text-sm text-[#211A24] focus:outline-none focus:border-[#6B4E9E] transition-colors"
                        >
                          <option value="Paket Express Studio">Paket Express (1 Jam, 10 Retouched Digital)</option>
                          <option value="Paket Essential Studio">Paket Essential (2 Jam, 20 Retouched + Cetak)</option>
                          <option value="Paket Deluxe Studio">Paket Deluxe (3 Jam, 35 Retouched + Album Premium)</option>
                          <option value="Paket Full Day Liputan">Paket Full Day (Liputan Seharian 8+ Jam)</option>
                          <option value="Paket Custom Bespoke">Paket Custom (Penyesuaian Kebutuhan Khusus)</option>
                        </select>
                      </div>

                      {/* Preferred Date */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#211A24]">
                          PERKIRAAN TANGGAL &amp; WAKTU
                        </label>
                        <input
                          type="text"
                          placeholder="contoh: Selasa Depan Jam 14:00"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#211A24]/15 text-sm text-[#211A24] focus:outline-none focus:border-[#6B4E9E] transition-colors"
                        />
                      </div>

                      {/* Number of Participants */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#211A24]">
                          ESTIMASI JUMLAH PESERTA
                        </label>
                        <select
                          value={formData.participants}
                          onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#211A24]/15 text-sm text-[#211A24] focus:outline-none focus:border-[#6B4E9E] transition-colors"
                        >
                          <option value="Solo (1 Orang)">Solo (1 Orang / Pas Foto / Eksekutif)</option>
                          <option value="1 - 3 Orang">1 - 3 Orang (Pasangan / Newborn)</option>
                          <option value="4 - 8 Orang">4 - 8 Orang (Keluarga / Grup Kecil)</option>
                          <option value="9+ Orang">9+ Orang (Grup Besar / Instansi / Event)</option>
                        </select>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-6 py-3.5 border border-[#211A24]/20 text-[#211A24] text-xs uppercase tracking-[0.2em] hover:bg-[#FAF7F5] transition-colors flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Kembali</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-3.5 bg-[#211A24] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] transition-all flex items-center gap-2"
                      >
                        <span>Lanjut: Data Kontak</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 03: Contact Details & Notes */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-serif text-2xl text-[#211A24]">
                        Langkah 03: Data Kontak &amp; Catatan
                      </h3>
                      <p className="text-xs text-[#211A24]/60 mt-1">
                        Isi data diri Anda agar kami dapat mengonfirmasi reservasi studio.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#211A24]">
                          NAMA LENGKAP *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="contoh: Sarah Aprilia"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#211A24]/15 text-sm text-[#211A24] focus:outline-none focus:border-[#6B4E9E] transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#211A24]">
                          ALAMAT EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="sarah@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#211A24]/15 text-sm text-[#211A24] focus:outline-none focus:border-[#6B4E9E] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#211A24]">
                        NOMOR TELEPON / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-3456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#211A24]/15 text-sm text-[#211A24] focus:outline-none focus:border-[#6B4E9E] transition-colors"
                      />
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#211A24]">
                        CATATAN &amp; PREFERENSI BACKDROP / LIGHTING *
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Tuliskan detail seperti jumlah anggota keluarga, jumlah produk, pilihan warna backdrop, atau lokasi acara..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF7F5] border border-[#211A24]/15 text-sm text-[#211A24] focus:outline-none focus:border-[#6B4E9E] transition-colors"
                      />
                    </div>

                    {/* Navigation & Submit Buttons */}
                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-6 py-3.5 border border-[#211A24]/20 text-[#211A24] text-xs uppercase tracking-[0.2em] hover:bg-[#FAF7F5] transition-colors flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Kembali</span>
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-4 bg-[#211A24] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#6B4E9E] transition-all duration-300 shadow-md flex items-center gap-2"
                      >
                        {loading ? (
                          <span>Mengirimkan Reservasi...</span>
                        ) : (
                          <>
                            <span>Kirim Reservasi</span>
                            <Send className="w-4 h-4 text-[#FAF7F5]" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
